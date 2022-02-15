import { Col, Row, Space, Image, Layout } from 'antd';
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

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterStyles>
      <Layout.Footer className="mainFooter">
        <div className="wrapper-container">
          <div className="footer-bottom flex-center-between size-l">
            <Space size={10} className="page-title size-xl">
              <Image
                className="section-image"
                preview={false}
                src="/images/logo.png"
                width={34}
              />
              <span className="font-title">
                Tinder4pet
              </span>
            </Space>
            <div className="footer-privacy-term">
              <Space size={28}>
                <Link href="#">
                  tinder4pet@gmail.com
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
