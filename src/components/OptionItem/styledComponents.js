import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-top: 5px;
  width: 100%;
  cursor: pointer;
`

export const OptionItemCon = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
`

export const OptionBtn = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  width: 100%;
  border: 0px;
  outline: none;
  cursor: pointer;
  padding: 20px;
  border-radius: 5px;
  background-color: ${props => {
    const {isActive, isDark} = props
    if (isActive) {
      return isDark ? '#cccccc40' : '#3b82f620'
    }
    return 'transparent'
  }};
`

export const OptionIcon = styled.p`
  font-size: 22px;
  color: ${props => (props.isActive ? '#ff0b37' : '#909090')};
`

export const OptionTitle = styled.h1`
  font-size: 20px;
  margin-left: 10px;
  color: ${props => {
    const {isActive, isDark} = props
    if (isActive) {
      return isDark ? '#f4f4f4' : '#383838'
    }
    return '#909090'
  }};
`
