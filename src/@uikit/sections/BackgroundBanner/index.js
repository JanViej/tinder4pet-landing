import Breadcrumb from '@uikit/commons/Breadcrumb'
import ScrollText from '@uikit/commons/ScrollText'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { formatI18nData } from 'utils/tools';

export default function BackgroundBanner({ background, title, breadcrumbs, height, position }) {
  return (
    <BackgroundBannerWrapper hasTitle={!!title} height={height} position={position} className="wrapper-full-height" background={background} gutter={[20, 20]}>
      <div className="background-mobile" />
      <div className="banner-content">
        {breadcrumbs && (
          <Breadcrumb data={breadcrumbs} />
        )}
        <div className="font-title banner-title" dangerouslySetInnerHTML={{ __html: formatI18nData(title) }} />
      </div>
      <ScrollText color="#fff" />
    </BackgroundBannerWrapper>
  );
}

const BackgroundBannerWrapper = styled.div`
  height: ${({ height }) => `calc(${height} - 64px)`};
  width: 100%;
  background-image: ${({ hasTitle, background }) => `linear-gradient(
          rgba(0, 0, 0, ${hasTitle ? 0.3 : 0}), 
          rgba(0, 0, 0, ${hasTitle ? 0.3 : 0})
        ), url(${background})`};
  background-size: cover;
  background-position: ${({ position }) => position};
  background-repeat: no-repeat;
  position: relative;

  .banner-content {
    max-width: 500px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 0 10px;
  }

  .ant-breadcrumb .ant-breadcrumb-link a, .ant-breadcrumb-separator {
    color: #fff;
  }

  .banner-title {
    font-size: 50px;
    margin-bottom: 20px;
    text-align: center;
  }

  @media only screen and (max-width: 576px) {
    background-image: none;
    flex-direction: column;

    .banner-title {
      font-size: 36px !important;
      text-align: left;
    }

    .banner-content {
      align-items: flex-start;
      color: #000;
      width: 90%;
    }
    
    .ant-breadcrumb .ant-breadcrumb-link a {
      color: #000;
    }

    .ant-breadcrumb-separator {
      color: rgba(0, 0, 0, 0.45);
    }

    .background-mobile {
      background-image: ${({ hasTitle, background }) => `linear-gradient(
          rgba(0, 0, 0, ${hasTitle ? 0.3 : 0}), 
          rgba(0, 0, 0, ${hasTitle ? 0.3 : 0})
        ), url(${background})`};
      background-size: cover;
      background-position: ${({ position }) => position};
      background-repeat: no-repeat;
      width: 100%;
      height: 50vh;
    }
  }
`

BackgroundBanner.defaultProps = {
  background: '/images/background8.png',
  height: '100vh',
  position: 'left center',
}

BackgroundBanner.propTypes = {
  breadcrumbs: PropTypes.array,
  title: PropTypes.string,
  background: PropTypes.string,
  height: PropTypes.string,
  position: PropTypes.string,
};
