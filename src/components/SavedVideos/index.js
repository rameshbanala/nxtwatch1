import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import AllOptionsContainer from '../AllOptionsContainer'

import ThemeContext from '../../context/NxtwatchContext'
import {
  TrendingContainer,
  MainTrendingContainer,
  TitleSection,
  IconContainer,
  TitleOfThePage,
} from '../Trending/styledComponents'
import OtherVideoItems from '../OtherVideoItems'
import {
  NoVideosContaier,
  NoVideosImg,
  NovideosTitle,
  NoVideosDesc,
  TrendingVideosContainerUl,
} from './styledComponents'

const SavedVideos = () => {
  const renderSavedVideos = (isDark, savedVideosList) => (
    <TrendingVideosContainerUl>
      {savedVideosList.map(eachItem => (
        <OtherVideoItems
          key={eachItem.id}
          videoData={eachItem}
          isDark={isDark}
        />
      ))}
    </TrendingVideosContainerUl>
  )
  const renderNoSavedVideos = isDark => (
    <NoVideosContaier>
      <NoVideosImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NovideosTitle isDark={isDark}>No saved videos found</NovideosTitle>
      <NoVideosDesc isDark={isDark}>
        You can save your videos while watching them
      </NoVideosDesc>
    </NoVideosContaier>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, savedVideosList} = value
        return (
          <>
            <Header />
            <TrendingContainer>
              <AllOptionsContainer />
              <MainTrendingContainer isDark={isDark} data-testid="savedVideos">
                <TitleSection isDark={isDark} data-testid="banner">
                  <IconContainer isDark={isDark}>
                    <HiFire />
                  </IconContainer>
                  <TitleOfThePage isDark={isDark}>Saved Videos</TitleOfThePage>
                </TitleSection>
                {savedVideosList.length === 0
                  ? renderNoSavedVideos(isDark)
                  : renderSavedVideos(isDark, savedVideosList)}
              </MainTrendingContainer>
            </TrendingContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default SavedVideos
