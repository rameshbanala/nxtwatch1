import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import {IoIosLogOut} from 'react-icons/io'

export const NavBar = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  height: 80px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  align-items: center;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
`

export const LogoImg = styled.img`
  height: 35px;
  width: 140px;
`
export const ProfileOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`

export const ProfileOption = styled.button`
  height: 40px;
  width: 40px;
  border: 0px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 27px;
  margin-right: 15px;
  color: ${props => (props.isDark ? '#f1f5f9' : '#181818')};
`
export const ProfileImgOption = styled(ProfileOption)`
  @media (max-width: 767px) {
    display: none;
  }
`

export const FaBarsIcon = styled(FaBars)`
  color: ${props => (props.isDark ? '#f1f5f9' : '#181818')};
`
export const ProfileBarsIcon = styled(ProfileOption)`
  @media (min-width: 768px) {
    display: none;
  }
`
export const MdLogoutIcon = styled(IoIosLogOut)`
  font-size: 32px;
  color: ${props => (props.isDark ? '#f1f5f9' : '#181818')};
  @media (min-width: 768px) {
    display: none;
  }
`
export const LogoutContainerText = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`
export const ProfileImg = styled.img`
  width: 100%;
`
export const LogoutBtn = styled.button`
  height: 34px;
  margin-bottom: 5px;
  width: 80px;
  border: 1px solid ${props => (props.isDark ? '#d7dfe9' : '#3b82f6')};
  color: ${props => (props.isDark ? '#d7dfe9' : '#3b82f6')};
  font-weight: 800;
  font-family: Roboto;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  font-size: 14px;
  @media (max-width: 767px) {
    border: none;
    width: 40px;
  }
`
export const LogoutText = styled.p`
  font-size: 18px;
  color: ${props => (props.isDark ? '#ebebeb' : '#000000')};
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  justify-content: space-between;
`

export const PopupBtn = styled.button`
  height: 30px;
  width: 60px;
  outline: none;
  border: ${props => {
    if (props.isDark) {
      return props.isOutlined ? '1px solid #ebebeb' : '0px'
    }
    return props.isOutlined ? '1px solid #616e7c' : '0px'
  }};
  background-color: ${props => (props.isOutlined ? 'transparent' : '#3b82f6')};
  color: ${props => {
    if (props.isOutlined) {
      return props.isDark ? '#ebebeb' : '#616e7c'
    }
    return '#ffffff'
  }};
  cursor: pointer;
  border-radius: 4px;
`
