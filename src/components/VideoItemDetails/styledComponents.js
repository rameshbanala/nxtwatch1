import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  font-family: Roboto;
  margin-top: 80px;
`
export const MainVideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const VideoTitle = styled.h1`
  font-size: 22px;
  margin-top: 15px;
  color: ${props => (props.isDark ? '#f1f1f1' : '#1e293b')};
  font-weight: 500;
  @media (max-width: 767px) {
    margin-left: 15px;
    font-size: 18px;
  }
`
export const MainTrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: none;
  width: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  @media (max-width: 767px) {
    margin-left: 0px;
  }
  @media (min-width: 768px) {
    margin-left: 220px;
  }
`
export const VideoOptionsDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`
export const HorizontalRuleContainer = styled.div`
  width: 100%;
`
export const ViewsAndPublishedContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ViewText = styled.p`
  font-size: 15px;
  color: ${props => (props.isDark ? '#cccccc' : '#64748b')};
`
export const SpanElement = styled.span`
  font-size: 36px;
  margin-left: 5px;
  margin-right: 5px;
  padding-bottom: 20px;
  color: ${props => (props.isDark ? '#cccccc' : '#64748b')};
`

export const ReactionButton = styled.button`
  height: 30px;
  width: 100px;
  border: 0px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  margin-right: 10px;
  cursor: pointer;
  font-size: 22px;
  font-weight: ${props => (props.isLiked ? 'bold' : '400')};
  color: ${props => {
    if (props.isLiked) {
      return '#2563eb'
    }
    return '#64748b'
  }};
`
export const ButtonSpan = styled.span`
  font-size: 18px;
  margin-left: 4px;
  font-weight: ${props => (props.isLiked ? 'bold' : '400')};
  color: ${props => {
    if (props.isLiked) {
      return '#2563eb'
    }
    return '#64748b'
  }};
`
export const ChannelDescContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
`
export const ChannelLogo = styled.img`
  height: 55px;
  width: 55px;
  margin-right: 20px;
`
export const ChannelTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#f1f1f1' : '#1e293b')};
  margin-top: 5px;
  margin-bottom: 5px;
`
export const NoOfSubscribers = styled.p`
  font-size: 14px;
  color: ${props => (props.isDark ? '#cccccc' : '#64748b')};
  margin-top: 4px;
`
export const Description = styled.p`
  font-size: 15px;
  color: ${props => (props.isDark ? '#cbd5e1' : '#64748b')};
`
