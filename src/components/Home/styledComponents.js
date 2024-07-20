import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 80px;
`
export const MainHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  flex-grow: 1;
  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0px;
  }
  @media (min-width: 768px) {
    width: calc(100%-220px);
    margin-left: 220px;
  }
`

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  margin-left: 60px;
  margin-top: 20px;
  @media (max-width: 576px) {
    margin-top: 30px;
    margin-left: auto;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
  }
`
export const SearchInputEl = styled.input`
  height: 35px;
  width: 70%;
  font-size: 16px;
  padding: 14px;
  padding-right: 0px;
  outline: none;
  color: ${props => (props.isDark ? '#f8fafc' : '#383838')};
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  border: 1px solid ${props => (props.isDark ? '#424242' : '#cccccc')};
  border-right: 0px;
  @media (max-width: 767px) {
    width: 90%;
  }
`

export const SearchBtn = styled.button`
  height: 35px;
  width: 50px;
  font-size: 19px;
  border: 1px solid ${props => (props.isDark ? '#424242' : '#cccccc')};
  color: ${props => (props.isDark ? '#f8fafc' : '#383838')};
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  cursor: pointer;
  outline: none;
  padding: 5px;
`

export const VideoItemsContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding-left: 0px;
  list-style-type: none;
  margin-left: 40px;
  @media (max-width: 576px) {
    margin: 15px;
    width: 95%;
    padding-right: 0px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`
export const NoResultImg = styled.img`
  width: 50%;
  max-width: 400px;
  @media (max-width: 767px) {
    width: 70%;
  }
`
export const NoresultTitle = styled.h1`
  font-size: 32px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-family: Roboto;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: 767px) {
    font-size: 22px;
  }
`

export const NoresultDesc = styled.p`
  font-size: 22px;
  color: ${props => (props.isDark ? '#7e858e' : '#606060')};
  font-family: Roboto;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: 767px) {
    font-size: 16px;
    text-align: center;
  }
`
export const RetryBtn = styled.button`
  height: 50px;
  width: 70px;
  color: #ebebeb;
  background-color: #4f46e5;
  font-family: Roboto;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  @media (max-width: 767px) {
    height: 40px;
    width: 50px;
  }
`
