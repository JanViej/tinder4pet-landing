import { Col, Row, Space, Divider, Layout } from 'antd';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { FooterStyles } from './styles';

const shopUrls = [
  {
    path: '/',
    text: 'home.title',
  },
  {
    path: '/products',
    text: 'home.shop',
  },
  {
    path: '/',
    text: 'home.personalize',
  },
  {
    path: '/',
    text: 'home.madeToOrder',
  },
  {
    path: '/',
    text: 'home.coffee',
  },
  {
    path: '/',
    text: 'home.goods',
  },
  {
    path: '/',
    text: 'home.service',
  },
  {
    path: '/',
    text: 'home.learn',
  },
  {
    path: '/',
    text: 'home.wholeSale',
  },
]
const companyUrls = [
  {
    path: '/about-us',
    text: 'home.aboutUs',
  },
  {
    path: '/blogs',
    text: 'home.blog',
  },
  {
    path: '/',
    text: 'home.sustainability',
  },
  {
    path: '/',
    text: 'home.careerers',
  },
  {
    path: '/',
    text: 'home.farmCooperative',
  },
  {
    path: '/',
    text: 'home.facebook',
  },
  {
    path: '/',
    text: 'home.linkedin',
  },
  {
    path: '/',
    text: 'home.instagram',
  },
]

const Footer = ({ isScroll }) => {
  const { t } = useTranslation();

  return (
    <FooterStyles isScroll={isScroll}>
      <Layout.Footer className="mainFooter wrapper-full-height">
        <div className="wrapper-container">
          <Row gutter={[24, 24]} className="footer-row-content">
            <Col lg={6} md={6} sm={12} xs={12}>
              <Space direction="vertical" size={20}>
                <div className="font-title size-xxl">
                  {t('home.shop')}
                </div>
                <Space className="menu-space-item" direction="vertical" size={8}>
                  {shopUrls.map(url => (
                    <Link href={url.path}>
                      <span className="link">
                        {t(url.text)}
                      </span>
                    </Link>
                  ))}
                </Space>
              </Space>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Space direction="vertical" size={20}>
                <div className="font-title size-xxl">
                  {t('home.company')}
                </div>
                <Space className="menu-space-item" direction="vertical" size={8}>
                  {companyUrls.map(url => (
                    <Link href={url.path}>
                      <span className="link">
                        {t(url.text)}
                      </span>
                    </Link>
                  ))}
                </Space>
              </Space>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <Space direction="vertical" size={20}>
                <div className="font-title size-xxl">
                  {t('home.support')}
                </div>
                <Space className="menu-space-item" direction="vertical" size={8}>
                  <Link href="/contact-us">
                    <span className="link">
                      {t('contactUs.title')}
                    </span>
                  </Link>
                  <Link href="mailto:bosgaurus@bosgauruscoffee.com">
                    <span className="link">
                      {t('contactUs.email', {
                        email: 'bosgaurus@bosgauruscoffee.com',
                      })}
                    </span>
                  </Link>
                  <Link href="tel:840123456789">
                    <span className="link">
                      {t('contactUs.phone', {
                        phone: '+84 (0) 123 456 789',
                      })}
                    </span>
                  </Link>
                  <span className="link">
                    Mon - Fri: 9AM - 9PM
                  </span>
                  <span className="link">
                    {t('contactUs.address')}
                  </span>
                  <img src="/images/verified.png" />
                </Space>
              </Space>
            </Col>
            {/* <Col xl={6} lg={8} md={24} xs={24}>
              <Space direction="vertical" className="footer-left" size={16}>
                <Link href="/">
                  <img
                    className="footer-logo"
                    alt="logoLight"
                    src="/svg/logo-light.svg"
                  />
                </Link>
                <div>{t('footer.description')}</div>

                <Space className="footer-social" size={20}>
                  <a
                    rel="noreferrer"
                    aria-label="facebook"
                    target="_blank"
                    href="https://www.facebook.com/artcific/"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    rel="noreferrer"
                    aria-label="twitter"
                    target="_blank"
                    href="https://twitter.com/artcific/"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    rel="noreferrer"
                    aria-label="instagram"
                    target="_blank"
                    href="https://www.instagram.com/artcific/"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    aria-label="linkedin"
                    href="https://www.linkedin.com/company/artcific/"
                  >
                    <LinkedInIcon />
                  </a>
                </Space>
              </Space>
            </Col>

            <Col xl={18} lg={16} md={24} xs={24}>
              <FooterMenu />
            </Col> */}
          </Row>
          <Divider className="footer-divider" />
          <div className="footer-bottom flex-center-between size-l">
            <div className="footer-copyright">
              <span className="font-title">
                {`${t(
                  'footer.copyright',
                )} © Bosgaurus Coffee Roasters.`}
              </span>
              <span className="font-title">
                {` ${new Date().getFullYear()} ${t('footer.allRightReserved')}`}
              </span>
            </div>
            <div className="footer-privacy-term">
              <Space size={28}>
                <Link href="/miscellaneous/refund-policy">
                  {t('title.returnPolicy')}
                </Link>
                <Link href="/miscellaneous/privacy-policy">{t('title.privacyPolicy')}</Link>
                <Link href="/miscellaneous/terms-conditions">
                  {t('title.terms')}
                </Link>
              </Space>
            </div>
          </div>
        </div>
      </Layout.Footer>
    </FooterStyles>
  );
};
Footer.propTypes = {};

export default Footer;
