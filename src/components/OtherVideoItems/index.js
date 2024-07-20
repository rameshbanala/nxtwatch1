import {formatDistanceToNow} from 'date-fns'
import {
  VideoItemLink,
  ListItem,
  ThumbnailImg,
  VideoDescContainer,
  VideoTitle,
  ChannelName,
  PublishedAndViewsContainer,
  SpanEll,
  VideoDescContainerSm,
  SpanElSm,
  ChannelLogo,
  MainDescContainer,
} from './styledComponents'

const OtherVideoItems = props => {
  const {videoData, isDark} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoData
  const {name, profileImageUrl} = channel
  // const getDistance = () => {
  //   const distance = formatDistanceToNow(new Date(publishedAt))
  //   const years = distance.split(' ')[1]
  //   return years
  // }
  return (
    <VideoItemLink to={`/videos/${id}`}>
      <ListItem>
        <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
        <VideoDescContainer>
          <ChannelLogo src={profileImageUrl} alt="channel logo" />
          <MainDescContainer>
            <VideoTitle isDark={isDark}>{title}</VideoTitle>
            <VideoDescContainerSm>
              <ChannelName isDark={isDark}>{name}</ChannelName>
              <SpanElSm>.</SpanElSm>
              <PublishedAndViewsContainer>
                <ChannelName isDark={isDark}>{viewCount} views</ChannelName>
                <SpanEll isDark={isDark}>.</SpanEll>
                <ChannelName isDark={isDark}>{publishedAt}</ChannelName>
              </PublishedAndViewsContainer>
            </VideoDescContainerSm>
          </MainDescContainer>
        </VideoDescContainer>
      </ListItem>
    </VideoItemLink>
  )
}

export default OtherVideoItems
