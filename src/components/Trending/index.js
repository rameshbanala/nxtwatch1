import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import OtherVideoItems from '../OtherVideoItems'
import FailureView from '../FailureView'
import ThemeContext from '../../context/NxtwatchContext'
import AllOptionsContainer from '../AllOptionsContainer'
import {
  TrendingContainer,
  MainTrendingContainer,
  LoaderContainer,
  TitleSection,
  IconContainer,
  TitleOfThePage,
  TrendingVideosContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  progress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingVideosData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingData()
  }

  onRetry = () => {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    this.setState({apiStatus: apiStatusConstants.progress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
      }))
      this.setState({
        trendingVideosData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = isDark => {
    const color = isDark ? '#ffffff' : '#424242'
    return (
      <LoaderContainer data-testid="loader">
        <Loader type="ThreeDots" color={color} height="50" width="50" />
      </LoaderContainer>
    )
  }

  renderFailure = isDark => (
    <FailureView isDark={isDark} onRetry={this.onRetry} />
  )

  renderSuccess = isDark => {
    const {trendingVideosData} = this.state
    return (
      <TrendingVideosContainer>
        {trendingVideosData.map(eachItem => (
          <OtherVideoItems
            key={eachItem.id}
            videoData={eachItem}
            isDark={isDark}
          />
        ))}
      </TrendingVideosContainer>
    )
  }

  renderTrendingPage = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccess(isDark)
      case apiStatusConstants.failure:
        return this.renderFailure(isDark)
      case apiStatusConstants.progress:
        return this.renderLoader(isDark)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <TrendingContainer>
                <AllOptionsContainer />
                <MainTrendingContainer isDark={isDark} data-testid="trending">
                  <TitleSection isDark={isDark} data-testid="banner">
                    <IconContainer isDark={isDark}>
                      <HiFire />
                    </IconContainer>
                    <TitleOfThePage isDark={isDark}>Trending</TitleOfThePage>
                  </TitleSection>
                  {this.renderTrendingPage(isDark)}
                </MainTrendingContainer>
              </TrendingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Trending
