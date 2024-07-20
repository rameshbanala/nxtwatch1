import styled from 'styled-components'

export const BannerItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  font-family: Roboto;
  padding: 40px;
  @media (max-width: 767px) {
    padding: 10px;
    padding-bottom: 25px;
  }
  @media (min-width: 567px) {
    height: 250px;
  }
`
export const IconDescContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CrossIconContainer = styled.div`
  margin-right: 40px;
  @media (max-width: 767px) {
    margin-right: 20px;
  }
`

export const CloseBtn = styled.button`
  height: 40px;
  width: 40px;
  font-size: 22px;
  border: 0px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  color: #212121;
`
export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-top: 20px;
  @media (max-width: 767px) {
    margin-left: 25px;
    margin-top: 10px;
    justify-content: space-around;
    height: 100%;
  }
`

export const BannerItemLogo = styled.img`
  height: 36px;
  width: 180px;
`
export const BannerTitle = styled.p`
  font-size: 18px;
  color: #1e293b;
  width: 380px;
  margin-top: 30px;
  @media (max-width: 767px) {
    width: 70%;
  }
`
export const GetNowBtn = styled.button`
  height: 35px;
  width: 130px;
  border: 2px solid #424242;
  color: #424242;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  font-weight: 600;
`
