import {
  LinkContainer,
  ThumnbNailImg,
  ListItem,
  VideDataContainer,
  ChannelLogo,
  DataContainer,
  NameOfChannel,
  TitleOfTheItem,
  NoOfViewsAndDuration,
  ViesAndDurationContainer,
  SpanEl,
  DataContainerSm,
  SpanEll,
} from './styledComponents'

const VideoItem = props => {
  const {videoData, isDark} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoData
  const {name, profileImageUrl} = channel

  return (
    <LinkContainer to={`/videos/${id}`}>
      <ListItem>
        <ThumnbNailImg src={thumbnailUrl} alt="video thumbnail" />
        <VideDataContainer>
          <ChannelLogo src={profileImageUrl} alt="channel logo" />
          <DataContainer>
            <TitleOfTheItem isDark={isDark}>{title}</TitleOfTheItem>
            <DataContainerSm>
              <NameOfChannel isDark={isDark}>{name}</NameOfChannel>
              <SpanEll>.</SpanEll>
              <ViesAndDurationContainer>
                <NoOfViewsAndDuration isDark={isDark}>
                  {viewCount} views
                </NoOfViewsAndDuration>
                <SpanEl isDark={isDark}>.</SpanEl>
                <NoOfViewsAndDuration isDark={isDark}>
                  {publishedAt}
                </NoOfViewsAndDuration>
              </ViesAndDurationContainer>
            </DataContainerSm>
          </DataContainer>
        </VideDataContainer>
      </ListItem>
    </LinkContainer>
  )
}
export default VideoItem
