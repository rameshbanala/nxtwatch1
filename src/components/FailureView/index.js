import {LoaderContainer} from '../Trending/styledComponents'
import {
  NoresultDesc,
  NoResultImg,
  NoresultTitle,
  RetryBtn,
} from '../Home/styledComponents'

const FailureView = props => {
  const {isDark, onRetry} = props
  const failureImgUrl = isDark
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
  const clickOnRetry = () => {
    onRetry()
  }
  return (
    <LoaderContainer>
      <NoResultImg src={failureImgUrl} alt="failure view" />
      <NoresultTitle isDark={isDark}>Oops! something Went Wrong</NoresultTitle>
      <NoresultDesc isDark={isDark}>
        We are having some trouble to complete your request. Please try again.
      </NoresultDesc>
      <RetryBtn type="button" onClick={clickOnRetry}>
        Retry
      </RetryBtn>
    </LoaderContainer>
  )
}
export default FailureView
