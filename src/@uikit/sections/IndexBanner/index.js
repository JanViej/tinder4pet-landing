import { Col, Row, Image } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Link from '@uikit/commons/Link';
import ScrollText from '@uikit/commons/ScrollText';
import { Fade } from 'react-awesome-reveal';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function IndexBanner({ images, title, description }) {
  return (
    <div className="position-relative wrapper-full-height index-banner">
      <IndexBannerWrapper>
        <div className="wrapper-container">
          <Row gutter={[20, 20]}>
            <Col lg={12} sm={24} xs={24}>
              <div className="banner-info">
                <h2>
                  We found 
                  {' '}
                  <b>your pet</b>
                  {' '}
                  a
                </h2>
                <div className="font-title banner-title text-highlight">perfect match</div>
                <Fade delay={0.3} fraction={0.5} triggerOnce>
                  <Link href="https://drive.google.com/file/d/1Z0wXsBzATppdVQHKtDpydn3P12E7mDEg/view?usp=sharing">
                    <span className="link-wrapper text-highlight">
                      <span className="link text-highlight">Get our app</span>

                      <ArrowRightOutlined />
                    </span>
                  </Link>
                </Fade>
                <Fade delay={0.3} fraction={0.5} triggerOnce>
                  <div className="description">
                    We designed a platform where you can connect with others with
                    the same interest in pet
                  </div>
                </Fade>
              </div>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <div className="product-images-actions">
                <Image
                  preview={false}
                  src="/images/imageGroup1.png"
                  alt="e"
                  maxWidth="500"
                />
              </div>
            </Col>
          </Row>
        </div>
      </IndexBannerWrapper>
      <ScrollText />
    </div>
  );
}

const IndexBannerWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${'' /* align-items: center; */}
  background-position: right;
  background-image: url('/images/path-background.png');
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  .wrapper-container {
    .ant-row {
      width: 100%;
    }

    margin-top: 48px;
  }

  .product-images-actions {
    .ant-image-img {
      max-width: 500px;
    }
  }
  .banner-info {
    margin-top: 60px;
    padding-left: 120px;

    h2 {
      font-size: 26px;
    }

    .link {
      font-size: 20px;
    }
    .description {
      font-size: 16px;
      color: #04040461;
      line-height: 20px;
      max-width: 350px;
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
        border-bottom: 1px solid #ececec;
      }
    }
  }
`;

IndexBanner.defaultProps = {
  images: [
    'https://dbk0mrzxjk790.cloudfront.net/test/images/2fe0aa78-3727-4584-b89e-0c000b9668ea-d875af7930584018.jpg',
  ],
  title: {
    en: 'From farm to table<br />From Vietnam to the World',
    vi: 'Từ trang trại đến bàn ăn<br />Từ Việt Nam ra tận thế giới',
  },
  description: {
    en: 'Incredible, sustainably sourced coffee delivered fresh from roastery',
    vi: 'Những hạt cà phê có nguồn gốc bền vững, đáng kinh ngạc được cung cấp mới từ rang xay ',
  },
};

IndexBanner.propTypes = {
  images: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
};
