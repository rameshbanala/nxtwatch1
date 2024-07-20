import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkContainer = styled(Link)`
  display: flex;
  flex-direction: ${props => (props.isHome ? 'column' : 'row')};
  text-decoration: none;
  width: 28%;
  margin-top: 30px;
  margin-right: 15px;
  font-family: Roboto;
  @media (max-width: 576px) {
    width: 100%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    width: 45%;
  }
`
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const ThumnbNailImg = styled.img`
  height: 150px;
  width: 100%;
  @media (max-width: 576px) {
    height: 230px;
  }
`

export const VideDataContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
`
export const ChannelLogo = styled.img`
  height: 35px;
  width: 35px;
  @media (max-width: 767px) {
    height: 45px;
    width: 45px;
  }
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`
export const DataContainerSm = styled.div`
  display: flex;
  @media (max-width: 576px) {
    flex-direction: row;
  }
  @media (min-width: 577px) {
    flex-direction: column;
  }
`

export const TitleOfTheItem = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 0px;
  margin-bottom: 5px;
  color: ${props => (props.isDark ? '#f4f4f4' : '#00306e')};
`

export const NameOfChannel = styled.p`
  font-size: 14px;
  color: ${props => (props.isDark ? '#94a3b8' : '#616e7c')};
  @media (max-width: 576px) {
    margin-top: 29px;
    margin-right: 5px;
  }
`

export const NoOfViewsAndDuration = styled.p`
  font-size: 14px;
  color: ${props => (props.isDark ? '#94a3b8' : '#616e7c')};
  margin-top: 0px;
  margin-left: 5px;
  margin-right: 5px;
`
export const ViesAndDurationContainer = styled.div`
  display: flex;
  align-items: center;
`
export const SpanEl = styled.span`
  font-size: 42px;
  padding-bottom: 40px;
  color: ${props => (props.isDark ? '#94a3b8' : '#616e7c')};
`
export const SpanEll = styled(SpanEl)`
  @media (min-width: 577px) {
    display: none;
  }
`
