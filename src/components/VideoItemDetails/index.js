import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike} from 'react-icons/bi'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import {RiPlayListAddFill} from 'react-icons/ri'
import Cookies from 'js-cookie'
import AllOptionsContainer from '../AllOptionsContainer'
import ThemeContext from '../../context/NxtwatchContext'
import Header from '../Header'
import FailureView from '../FailureView'
import {
  VideoItemDetailsContainer,
  MainVideoDetailsContainer,
  VideoTitle,
  HorizontalRuleContainer,
  VideoOptionsDetailsContainer,
  ViewsAndPublishedContainer,
  ViewText,
  SpanElement,
  ReactionButton,
  ChannelDescContainer,
  ChannelLogo,
  ChannelTitle,
  NoOfSubscribers,
  Description,
  MainTrendingContainer,
} from './styledComponents'
import {LoaderContainer} from '../Trending/styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN-PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  onRetry = () => {
    this.getVideoItemDetails()
  }

  onToggleLiked = () => {
    this.setState(prevState => {
      if (prevState.isDisliked) {
        return {isLiked: true, isDisliked: false}
      }
      return {isLiked: !prevState.isLiked}
    })
  }

  onToggleDislike = () => {
    this.setState(prevState => {
      if (prevState.isLiked) {
        return {isDisliked: true, isLiked: false}
      }
      return {isDisliked: !prevState.isDisliked}
    })
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const videoDetails = data.video_details
      const updatedVideoDetails = {
        id: videoDetails.id,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        description: videoDetails.description,
      }
      this.setState({
        videoDetails: updatedVideoDetails,
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

  renderVideoPlayer = videoUrl => (
    <ReactPlayer url={videoUrl} controls width="100%" />
  )

  renderSuccess = (
    isDark,
    addSavedVideo,
    savedVideosList,
    removeSavedVideo,
  ) => {
    const {videoDetails, isLiked, isDisliked} = this.state
    const {id, title, videoUrl, channel, viewCount, publishedAt, description} =
      videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    // const getDistance = () => {
    //   const distance = formatDistanceToNow(new Date(publishedAt))
    //   const years = distance.split(' ')[1]
    //   return years
    // }
    const isSavedVideo = savedVideosList.find(eachItem => eachItem.id === id)
    const isSaved = !!isSavedVideo
    const onSaveVideo = () => {
      if (isSaved) {
        removeSavedVideo(videoDetails)
      } else {
        addSavedVideo({...videoDetails, isSaved: true})
      }
    }
    return (
      <MainVideoDetailsContainer>
        {this.renderVideoPlayer(videoUrl)}
        <VideoTitle isDark={isDark}>{title}</VideoTitle>
        <VideoOptionsDetailsContainer>
          <ViewsAndPublishedContainer>
            <ViewText isDark={isDark}>{viewCount} views</ViewText>
            <SpanElement>.</SpanElement>
            <ViewText isDark={isDark}>{publishedAt}</ViewText>
          </ViewsAndPublishedContainer>
          <ViewsAndPublishedContainer>
            <ReactionButton
              isDark={isDark}
              isLiked={isLiked}
              onClick={this.onToggleLiked}
            >
              <BiLike />
              Like
            </ReactionButton>
            <ReactionButton
              isDark={isDark}
              isLiked={isDisliked}
              onClick={this.onToggleDislike}
            >
              <BiDislike />
              Dislike
            </ReactionButton>
            <ReactionButton
              isDark={isDark}
              onClick={onSaveVideo}
              isLiked={isSaved}
            >
              <RiPlayListAddFill />
              {isSaved ? 'Saved' : 'Save'}
            </ReactionButton>
          </ViewsAndPublishedContainer>
        </VideoOptionsDetailsContainer>
        <HorizontalRuleContainer>
          <hr />
        </HorizontalRuleContainer>
        <ChannelDescContainer>
          <ChannelLogo src={profileImageUrl} alt="channel logo" />
          <div>
            <ChannelTitle isDark={isDark}>{name}</ChannelTitle>
            <NoOfSubscribers isDark={isDark}>{subscriberCount}</NoOfSubscribers>
            <Description isDark={isDark}>{description}</Description>
          </div>
        </ChannelDescContainer>
      </MainVideoDetailsContainer>
    )
  }

  renderVideoDetails = (
    isDark,
    addSavedVideo,
    savedVideosList,
    removeSavedVideo,
  ) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccess(
          isDark,
          addSavedVideo,
          savedVideosList,
          removeSavedVideo,
        )
      case apiStatusConstants.failure:
        return this.renderFailure(isDark)
      case apiStatusConstants.inProgress:
        return this.renderLoader(isDark)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, addSavedVideo, savedVideosList, removeSavedVideo} =
            value
          return (
            <div>
              <Header />
              <VideoItemDetailsContainer>
                <AllOptionsContainer />
                <MainTrendingContainer
                  isDark={isDark}
                  data-testid="videoItemDetails"
                >
                  {this.renderVideoDetails(
                    isDark,
                    addSavedVideo,
                    savedVideosList,
                    removeSavedVideo,
                  )}
                </MainTrendingContainer>
              </VideoItemDetailsContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default VideoItemDetails
