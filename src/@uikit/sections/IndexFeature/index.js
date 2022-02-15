import PropTypes from 'prop-types';
import { Row, Col, Image } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { formatI18nData } from 'utils/tools';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import Link from '@uikit/commons/Link';

const IndexFeature = ({ className, title, description, image, isReversed, buttonText, buttonLink }) => (
  <div className={`wrapper-container index-feature ${className}`}>
    <IndexFeatureWrapper
      gutter={40}
      isReversed={isReversed}
    >
      <Col lg={10} md={10} sm={24} xs={24}>
        <div className="banner-info">
          <div className="font-title feature-title size-xxxl" dangerouslySetInnerHTML={{ __html: formatI18nData(title) }} />
          <Fade fraction={0.5} triggerOnce>
            <div className="description">
              {formatI18nData(description)}
            </div>
          </Fade>
          {buttonLink && (
            <Link href={buttonLink}>
              <span className="link-wrapper">
                <span className="link">
                  {formatI18nData(buttonText)}
                </span>
                <ArrowRightOutlined />
              </span>
            </Link>
          )}
        </div>
      </Col>
      <Col lg={14} md={14} sm={24} xs={24}>
        <div className="feature-images">
          <Fade fraction={0.5} triggerOnce>
            <Image preview={false} src={image} />
          </Fade>
        </div>
      </Col>
    </IndexFeatureWrapper>
  </div>
  )

const IndexFeatureWrapper = styled(Row)`
  flex-direction: ${({ isReversed }) => isReversed ? 'row-reverse' : 'row'};
  padding: 80px 0;

  .feature-images {
    height: 100%;
    width: 100%;

    .ant-image, img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .banner-info {
    margin-top: 40px;
    padding: ${({ isReversed }) => isReversed ? '0 0 0 40px' : '0 40px 0 0'};

    .feature-title {
      margin-bottom: 18px;
    }

    .link, .description {
      font-size: 20px;
    }

    .link-wrapper {
      margin-top: 30px;
      margin-bottom: 30px;
      display: flex;
      align-items: baseline;

      .anticon {
        margin-left: 20px;
        font-size: 12px;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    flex-direction: column-reverse;
    padding: 40px 0;

    .banner-info {
      margin-top: 0px;
      padding: 0;

      .feature-title {
        font-size: 30px;
      }
      .description {
        font-size: 18px;
      }
    }
  }
`

IndexFeature.defaultProps = {
  title: {
    en: 'Visit our stores',
    vi: 'Hãy ghé thăm cửa hàng của chúng tôi',
  },
  description: {
    en: 'Enjoy the view of our stores towards the greeny trees and beautiful river of Saigon.',
    vi: 'Tận hưởng những hàng cây xanh và dòng sông tuyệt đẹp của Sài Gòn từ cửa hàng của chúng tôi.',
  },
  image: '/images/background3.png',
  buttonText: {
    en: 'View direction',
    vi: 'Xem hướng đi',
  },
}

IndexFeature.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  isReversed: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
}

export default IndexFeature