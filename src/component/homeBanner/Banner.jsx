import { BannerText, BannerWrapper } from "./Banner.styles"
import { BannerImg } from '../../assets/images/images';

const Banner = () => {
  return (
    <BannerWrapper>
      <img src={BannerImg} alt="banner" />
      <BannerText>Watch something incredible.</BannerText>
    </BannerWrapper>
  );
}

export default Banner