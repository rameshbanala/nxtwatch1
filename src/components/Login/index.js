import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/NxtwatchContext'
import {
  LoginRouteContainer,
  LoginCardContainer,
  LogoImg,
  LoginForm,
  InputContainer,
  InputLabel,
  InputElement,
  CheckboxContainer,
  CheckBoxEl,
  SubmitButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isLoginFail: false,
    loginErrMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickCheckBox = event => {
    this.setState({showPassword: event.target.checked})
  }

  loginSuccess = data => {
    const {history} = this.props
    Cookies.set('jwt_token', data.jwt_token, {expires: 30})
    history.replace('/')
  }

  loginFail = errorMsg => {
    this.setState({isLoginFail: true, loginErrMsg: errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = ' https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.loginSuccess(data)
    } else {
      this.loginFail(data.error_msg)
    }
  }

  render() {
    const {isLoginFail, loginErrMsg, showPassword, username, password} =
      this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          // Conditional URL based on the theme
          const logoImgUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginRouteContainer isDarkMode={isDark}>
              <LoginCardContainer isDark={isDark}>
                <LogoImg src={logoImgUrl} />
                <LoginForm onSubmit={this.onSubmitForm}>
                  <InputContainer>
                    <InputLabel isDark={isDark} htmlFor="username">
                      USERNAME
                    </InputLabel>
                    <InputElement
                      isDark={isDark}
                      type="text"
                      id="username"
                      value={username}
                      onChange={this.onChangeUsername}
                      placeholder="Username"
                    />
                  </InputContainer>
                  <InputContainer>
                    <InputLabel isDark={isDark} htmlFor="password">
                      PASSWORD
                    </InputLabel>
                    <InputElement
                      isDark={isDark}
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      onChange={this.onChangePassword}
                      placeholder="Password"
                    />
                  </InputContainer>
                  <CheckboxContainer>
                    <CheckBoxEl
                      type="checkbox"
                      id="showPassword"
                      onClick={this.onClickCheckBox}
                    />
                    <InputLabel htmlFor="showPassword">
                      Show Password
                    </InputLabel>
                  </CheckboxContainer>
                  <SubmitButton type="submit">Login</SubmitButton>
                  {isLoginFail && <ErrorMsg>*{loginErrMsg}</ErrorMsg>}
                </LoginForm>
              </LoginCardContainer>
            </LoginRouteContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
