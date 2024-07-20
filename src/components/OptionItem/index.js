import {
  OptionItemCon,
  OptionBtn,
  OptionIcon,
  OptionTitle,
  LinkItem,
} from './styledComponents'
import ThemeContext from '../../context/NxtwatchContext'

const OptionItem = ({
  option,
  activeOptionId,
  onChangeOption,
  toggleSidebar,
}) => {
  const {displayText, id, icon, link} = option
  const active = id === activeOptionId
  const clickOnOption = () => {
    if (toggleSidebar !== undefined) {
      toggleSidebar()
    }
    onChangeOption(id)
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <LinkItem to={link} onClick={clickOnOption}>
            <OptionItemCon>
              <OptionBtn isActive={active} isDark={isDark}>
                <OptionIcon isActive={active}>{icon}</OptionIcon>
                <OptionTitle isDark={isDark} isActive={active}>
                  {displayText}
                </OptionTitle>
              </OptionBtn>
            </OptionItemCon>
          </LinkItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default OptionItem
