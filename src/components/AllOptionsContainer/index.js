import {withRouter} from 'react-router-dom'
import {Component} from 'react'
import {IoMdHome} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'
import ThemeContext from '../../context/NxtwatchContext'
import {
  OptionsContainer,
  MainOptionsContainer,
  ContactUsContainer,
  ContactUsTitle,
  ContactAppsContainer,
  ContactAppIconBtn,
  ContactAppIcon,
  ContactDesc,
} from './styledComponents'
import OptionItem from '../OptionItem'

const options = [
  {
    id: 'HOME',
    displayText: 'Home',
    link: '/',
    icon: <IoMdHome />,
  },
  {
    id: 'TRENDING',
    displayText: 'Trending',
    link: '/trending',
    icon: <HiFire />,
  },
  {
    id: 'GAMING',
    displayText: 'Gaming',
    link: '/gaming',
    icon: <SiYoutubegaming />,
  },
  {
    id: 'SAVEDVIDEOS',
    displayText: 'Saved Videos',
    link: '/saved-videos',
    icon: <RiPlayListAddFill />,
  },
]

class AllOptionsContainer extends Component {
  state = {activeOptionId: null}

  componentDidMount() {
    this.updateActiveOptionId()
  }

  componentDidUpdate(prevProps) {
    const {location} = this.props
    if (location.pathname !== prevProps.location.pathname) {
      this.updateActiveOptionId()
    }
  }

  updateActiveOptionId = () => {
    const {location} = this.props
    const activeOption = options.find(
      option => option.link === location.pathname,
    )
    this.setState({activeOptionId: activeOption ? activeOption.id : null})
  }

  onChangeOption = id => {
    this.setState({activeOptionId: id})
  }

  renderOptions = toggleSidebar => {
    const {activeOptionId} = this.state
    return options.map(eachItem => (
      <OptionItem
        key={eachItem.id}
        option={eachItem}
        activeOptionId={activeOptionId}
        onChangeOption={this.onChangeOption}
        toggleSidebar={toggleSidebar}
      />
    ))
  }

  renderContactUs = isDark => (
    <ContactUsContainer>
      <ContactUsTitle isDark={isDark}>CONTACT US</ContactUsTitle>
      <ContactAppsContainer>
        <ContactAppIconBtn>
          <ContactAppIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
        </ContactAppIconBtn>
        <ContactAppIconBtn>
          <ContactAppIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
        </ContactAppIconBtn>
        <ContactAppIconBtn>
          <ContactAppIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </ContactAppIconBtn>
      </ContactAppsContainer>
      <ContactDesc isDark={isDark}>
        Enjoy! Now to see your channels and recommendations!
      </ContactDesc>
    </ContactUsContainer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, isSidebarVisible, toggleSidebar} = value
          return (
            <>
              <OptionsContainer
                isSidebarVisible={isSidebarVisible}
                isDark={isDark}
              >
                <MainOptionsContainer>
                  {this.renderOptions(toggleSidebar)}
                </MainOptionsContainer>
                {this.renderContactUs(isDark)}
              </OptionsContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(AllOptionsContainer)
