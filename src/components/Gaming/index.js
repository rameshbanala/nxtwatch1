import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import AllOptionsContainer from '../AllOptionsContainer'
import ThemeContext from '../../context/NxtwatchContext'
import FailureView from '../FailureView'
import Header from '../Header'
import GamingVideoItem from '../GamingVideoItem'
import {
  TrendingContainer,
  MainTrendingContainer,
  TitleOfThePage,
  TitleSection,
  IconContainer,
} from '../Trending/styledComponents'
import {LoaderContainer} from '../Home/styledComponents'
import {GamingDataContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  process: 'INPROCESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingData()
  }

  onRetry = () => {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({apiStatus: apiStatusConstants.process})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
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
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        gamingData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderFailure = isDark => (
    <FailureView isDark={isDark} onRetry={this.onRetry} />
  )

  renderLoader = isDark => {
    const color = isDark ? '#ffffff' : '#424242'
    return (
      <LoaderContainer data-testid="loader">
        <Loader type="ThreeDots" color={color} height="50" width="50" />
      </LoaderContainer>
    )
  }

  renderSuccess = isDark => {
    const {gamingData} = this.state
    return (
      <GamingDataContainer>
        {gamingData.map(eachItem => (
          <GamingVideoItem
            key={eachItem.id}
            videoData={eachItem}
            isDark={isDark}
          />
        ))}
      </GamingDataContainer>
    )
  }

  renderGamingPage = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.failure:
        return this.renderFailure(isDark)
      case apiStatusConstants.success:
        return this.renderSuccess(isDark)
      case apiStatusConstants.process:
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
                <MainTrendingContainer isDark={isDark} data-testid="gaming">
                  <TitleSection isDark={isDark} data-testid="banner">
                    <IconContainer isDark={isDark}>
                      <SiYoutubegaming />
                    </IconContainer>
                    <TitleOfThePage isDark={isDark}>Gaming</TitleOfThePage>
                  </TitleSection>
                  {this.renderGamingPage(isDark)}
                </MainTrendingContainer>
              </TrendingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Gaming
