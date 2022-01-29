import Link from 'next/link';
import { Space } from 'antd';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const MENU = [
  {
    title: 'header.shop',
    href: '/products',
  },
  {
    title: 'header.ourStory',
    href: '/about-us',
  },
  {
    title: 'header.contactUs',
    href: '/contact-us',
  },
];

const MobileMenuHeader = ({ onCancel, direction }) => {
  const { pathname } = useRouter();
  const { t } = useTranslation();

  return (
    <Space size={20} direction={direction} className="header-mobile-menu">
      {MENU.map((menu) => (
        <Link key={menu.title} href={menu.href}>
          <a
            role="presentation"
            className={pathname === menu.href ? 'active' : ''}
            onClick={onCancel}
          >
            {t(menu.title)}
          </a>
        </Link>
      ))}
    </Space>
  );
};

MobileMenuHeader.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default MobileMenuHeader;
