import {IoMdClose} from 'react-icons/io'
import {
  BannerItemContainer,
  CrossIconContainer,
  CloseBtn,
  IconDescContainer,
  DescContainer,
  BannerItemLogo,
  BannerTitle,
  GetNowBtn,
} from './styledComponents'

const BannerItem = props => {
  const {removeBanner} = props
  const onRemoveBanner = () => {
    removeBanner()
  }

  return (
    <BannerItemContainer data-testid="banner">
      <IconDescContainer>
        <DescContainer>
          <BannerItemLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerTitle>
            Buy Nxt Watch Premium prepaid plans with UPI
          </BannerTitle>
          <GetNowBtn>GET IT NOW</GetNowBtn>
        </DescContainer>
        <CrossIconContainer>
          <CloseBtn onClick={onRemoveBanner} data-testid="close">
            <IoMdClose />
          </CloseBtn>
        </CrossIconContainer>
      </IconDescContainer>
    </BannerItemContainer>
  )
}
export default BannerItem
