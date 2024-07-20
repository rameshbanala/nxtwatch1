import styled from 'styled-components'

export const LoginRouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Roboto;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f8fafc')};
`

export const LoginCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.isDark ? '#1e293b' : '#1e293b')}
  border-radius: 10px;
  box-shadow: 4px 0px 10px 0px #bfbfbf;
  padding: 20px;
  width: 30%;
  @media (max-width: 767px) {
    width: 90%;
  }
`

export const LogoImg = styled.img`
  width: 70%;
  height: 60px;
  @media (max-width: 767px) {
    width: 50%;
    height: 35px;
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  @media (max-width: 767px) {
    margin-top: 20px;
  }
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 14px;
  margin: 0px;
`

export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 5px;
  margin-top: 5px;
  color: ${props => (props.isDark ? '#f1f5f9' : '#909090')};
  @media (max-width: 767px) {
    font-size: 14px;
  }
`
export const InputElement = styled.input`
  height: 35px;
  width: 90%;
  border: 1px solid ${props => (props.isDark ? '#e2e8f0' : '#94a3b8')};
  border-radius: 5px;
  padding: 5px;
  padding-left: 12px;
  outline: none;
  font-size: 15px;
  background-color: ${props => (props.isDark ? '#1e293b' : '#ffffff')};
  color: ${props => (props.isDark ? '#64748b' : '#0f0f0f')};
`
export const CheckBoxEl = styled.input`
  height: 15px;
  width: 15px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const SubmitButton = styled.button`
  height: 35px;
  width: 90%;
  border: 0px;
  border-radius: 5px;
  background-color: #3b82f6;
  color: #ffffff;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
`
