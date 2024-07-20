import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLinkItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 20%;
  font-family: Roboto;
  text-decoration: none;
  margin: 15px;
  @media (max-width: 767px) {
    width: 40%;
    margin: 10px;
  }
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const GamingVideoThumbnail = styled.img`
  height: 340px;
  width: 100%;
  @media (max-width: 767px) {
    height: 220px;
  }
`
export const GamingVideoTitle = styled.p`
  font-size: 18px;
  color: ${props => (props.isDark ? '#ebebeb' : '#1e293b')};
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 500;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`

export const GamingVideoViewCount = styled.p`
  font-size: 16px;
  color: ${props => (props.isDark ? '#64748b' : '#606060')};
  margin-top: 0px;
  margin-bottom: 5px;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`
