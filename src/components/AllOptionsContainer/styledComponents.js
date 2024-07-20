import styled from 'styled-components'

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  width: 220px;
  position: fixed;
  overflow-x: hidden;
  top: 80px;
  left: 0;
  height: calc(100% - 50px);
  z-index: 999;
  @media (max-width: 767px) {
    display: ${props => (props.isSidebarVisible ? 'flex' : 'none')};
    height: 60vh;
    width: 100%;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`
export const MainOptionsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 0px;
  list-style-type: none;
`
export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const ContactUsTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  color: ${props => (props.isDark ? '#f4f4f4' : '#00306e')};
  margin-left: 18px;
  font-family: Roboto;
`

export const ContactAppsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin-top: 10px;
  margin-left: 15px;
`
export const ContactAppIconBtn = styled.button`
  border: 0px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: 0px;
  margin-right: 8px;
`

export const ContactAppIcon = styled.img`
  height: 40px;
  width: 40px;
`
export const ContactDesc = styled.p`
  font-size: 18px;
  width: 80%;
  margin-left: 18px;
  margin-top: 5px;
  color: ${props => (props.isDark ? '#f4f4f4' : '#00306e')};
`
