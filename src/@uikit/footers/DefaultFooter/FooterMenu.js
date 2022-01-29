import { useRef } from 'react';
import { Col, Row, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { FooterMenuStyle } from './styles';
import Link from '../../commons/Link';
import FeedbackModal from '../FeedbackModal';
import HelpCenterModal from '../HelpCenterModal';

const FooterMenu = () => {
  const feedbackModalRef = useRef();
  const helpCenterModalRef = useRef();

  const { t } = useTranslation();

  const onClickFeedback = () => {
    feedbackModalRef.current.open();
  };

  const onClickHelpCenter = () => {
    helpCenterModalRef.current.open();
  };

  const MENU = [
    {
      title: '',
      items: [
        {
          title: 'footer.aboutUs',
          href: '/about-us',
        },
        {
          title: 'footer.joinOurTeam',
          href: '#',
        },
        {
          title: 'footer.press',
          href: `/press/media`,
        },
      ],
    },
    {
      title: '',
      items: [
        {
          title: 'footer.artcificForArtists',
          href: 'for-artists',
        },
        {
          title: 'footer.artcificForGalleries',
          href: 'for-galleries',
        },
      ],
    },
    {
      title: '',
      items: [
        {
          title: 'footer.allArtworks',
          href: '/artworks',
        },
        {
          title: 'footer.allArtists',
          href: '/artists',
        },
        {
          title: 'footer.allGalleries',
          href: '/galleries',
        },
      ],
    },
    {
      title: '',
      items: [
        {
          title: 'footer.contactUs',
          href: '/contact-us',
        },
        {
          title: 'footer.helpCenter',
          href: '#',
          onClick: onClickHelpCenter,
        },
        {
          title: 'footer.helpCenter',
          href: '#',
          onClick: onClickFeedback,
        },
      ],
    },
  ];

  return (
    <FooterMenuStyle className="footer-menu">
      <Row gutter={[0, 20]}>
        {MENU.map((e, idx) => (
          <Col
            className="footer-menu-col"
            key={String(idx)}
            md={6}
            lg={6}
            sm={12}
            xs={12}
          >
            <Space direction="vertical" size={20}>
              {e.items.map((e, index) =>
                e.onClick ? (
                  <span
                    role="presentation"
                    className="pointer"
                    key={String(index)}
                    onClick={e.onClick}
                  >
                    {t(e.title)}
                  </span>
                ) : (
                  <Link key={String(index)} href={e.href}>
                    {t(e.title)}
                  </Link>
                ),
              )}
            </Space>
          </Col>
        ))}
      </Row>
      <FeedbackModal ref={feedbackModalRef} />
      <HelpCenterModal ref={helpCenterModalRef} />
    </FooterMenuStyle>
  );
};
FooterMenu.propTypes = {};

export default FooterMenu;
