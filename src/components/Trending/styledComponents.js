import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  width: 100%;
  font-family: Roboto;
  margin-top: 80px;
`
export const MainTrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: none;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  flex-grow: 1;
  min-height: 100vh;
  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0px;
  }
  @media (min-width: 768px) {
    width: calc(100%-220px);
    margin-left: 220px;
  }
`
export const TitleSection = styled.div`
  display: flex;
  height: 15vh;
  width: 100%;
  background-color: ${props => (props.isDark ? '#21212180' : '#d7dfe950')};
  align-items: center;
  padding-left: 40px;
`
export const TitleOfThePage = styled.h1`
  font-size: 28px;
  color: ${props => (props.isDark ? '#ebebeb' : '#231f20')};
  margin-left: 15px;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

export const IconContainer = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: ${props => (props.isDark ? '#000000' : '#e2e8f0')};
  color: #ff0000;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TrendingVideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: 40px;
  padding-left: 0px;
  list-style-type: none;
  @media (max-width: 576px) {
    margin-left: 20px;
  }
`
