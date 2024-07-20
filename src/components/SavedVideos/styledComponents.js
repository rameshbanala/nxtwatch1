import styled from 'styled-components'

export const NoVideosContaier = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-family: Roboto;
`
export const NoVideosImg = styled.img`
  width: 30%;
`
export const NovideosTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 8px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`
export const NoVideosDesc = styled.p`
  font-size: 21px;
  margin-top: 5px;
  color: ${props => (props.isDark ? '#f4f4f4' : '#616e7c')};
`
export const TrendingVideosContainerUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: 40px;
  padding-left: 0px;
  list-style-type: none;
`
