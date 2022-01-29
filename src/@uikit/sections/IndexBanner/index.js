import { Col, Row } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons'
import Link from '@uikit/commons/Link'
import ScrollText from '@uikit/commons/ScrollText'
import { useTranslation } from 'react-i18next';
import { Fade } from 'react-awesome-reveal';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { formatI18nData } from 'utils/tools';
import ImageSlide from './ImageSlide';

export default function IndexBanner({ images, title, description }) {
  const { t } = useTranslation();

  return (
    <div className="position-relative wrapper-full-height wrapper-container index-banner">
      <IndexBannerWrapper gutter={[20, 20]}>
        <Col lg={12} sm={24} xs={24}>
          <div className="banner-info">
            <div className="font-title banner-title" dangerouslySetInnerHTML={{ __html: formatI18nData(title) }} />
            <Fade delay={0.3} fraction={0.5} triggerOnce>
              <div className="description">
                {formatI18nData(description)}
              </div>
            </Fade>
            <Fade delay={0.3} fraction={0.5} triggerOnce>
              <Link href="/products">
                <span className="link-wrapper">
                  <span className="link">
                    {t('button.orderDelivery')}
                  </span>
                  <ArrowRightOutlined />
                </span>
              </Link>
            </Fade>
          </div>
        </Col>
        <Col lg={12} sm={24} xs={24}>
          <div className="product-images-actions">
            <Fade delay={0.3} triggerOnce>
              <ImageSlide data={images} />
            </Fade>
          </div>
        </Col>
      </IndexBannerWrapper>
      <ScrollText />
    </div>
  );
}

const IndexBannerWrapper = styled(Row)`
  width: 100%;
  ${'' /* align-items: center; */}

  .banner-info {
    margin-top: 60px;

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

  .banner-title {
    font-size: 55px;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 576px) {
    flex-direction: column-reverse;

    .banner-info {
      text-align: center;
      margin-top: 0;

      .banner-title {
        font-size: 26px !important;
      }

      .link-wrapper {
        justify-content: center;
        padding-bottom: 40px;
        border-bottom: 1px solid #ECECEC;
      }
    }
  }
`

IndexBanner.defaultProps = {
  images: ["https://dbk0mrzxjk790.cloudfront.net/test/images/2fe0aa78-3727-4584-b89e-0c000b9668ea-d875af7930584018.jpg"],
  title: {
    en: 'From farm to table<br />From Vietnam to the World',
    vi: 'Từ trang trại đến bàn ăn<br />Từ Việt Nam ra tận thế giới',
  },
  description: {
    en: 'Incredible, sustainably sourced coffee delivered fresh from roastery',
    vi: 'Những hạt cà phê có nguồn gốc bền vững, đáng kinh ngạc được cung cấp mới từ rang xay ',
  },
}

IndexBanner.propTypes = {
  images: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
};
