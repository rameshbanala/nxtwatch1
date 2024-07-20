import Header from '../Header'
import AllOptionsContainer from '../AllOptionsContainer'
import ThemeContext from '../../context/NxtwatchContext'
import {
  TrendingContainer,
  MainTrendingContainer,
} from '../Trending/styledComponents'
import {
  NoVideosContaier,
  NoVideosImg,
  NovideosTitle,
  NoVideosDesc,
} from '../SavedVideos/styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const notFoundImgUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <TrendingContainer>
            <AllOptionsContainer />
            <MainTrendingContainer isDark={isDark}>
              <NoVideosContaier>
                <NoVideosImg src={notFoundImgUrl} alt="not found" />
                <NovideosTitle isDark={isDark}>Page Not Found</NovideosTitle>
                <NoVideosDesc isDark={isDark}>
                  We are sorry, the page you requested could not be found.
                </NoVideosDesc>
              </NoVideosContaier>
            </MainTrendingContainer>
          </TrendingContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
