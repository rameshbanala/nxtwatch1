import {
  VideoLinkItem,
  ListItem,
  GamingVideoThumbnail,
  GamingVideoViewCount,
  GamingVideoTitle,
} from './styledComponents'

const GamingVideoItem = props => {
  const {videoData, isDark} = props
  const {id, title, thumbnailUrl, viewCount} = videoData

  return (
    <VideoLinkItem to={`/videos/${id}`}>
      <ListItem>
        <GamingVideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
        <GamingVideoTitle isDark={isDark}>{title}</GamingVideoTitle>
        <GamingVideoViewCount isDark={isDark}>
          {viewCount} Watching Worldwide
        </GamingVideoViewCount>
      </ListItem>
    </VideoLinkItem>
  )
}
export default GamingVideoItem
