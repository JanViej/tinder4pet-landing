import { useDispatch, useSelector } from 'react-redux';
import { CaretDownFilled, UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Avatar } from 'antd';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const PROFILE_MENU = [
  {
    key: 'profile',
    text: 'header.profile',
    href: '/profile',
  },
];

const UserInfo = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const logoutAction = () => {
    //
  };

  const menu = (
    <Menu style={{ minWidth: '120px' }}>
      {PROFILE_MENU.map((menu) => (
        <Menu.Item key={menu.href}>
          <Link href={menu.href}>{t(menu.text)}</Link>
        </Menu.Item>
      ))}
      <Menu.Divider />
      <Menu.Item onClick={logoutAction} key="logout">
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="header__user-info">
      <Dropdown overlay={menu} trigger={['click']}>
        <div className="dropdown-user">
          <span style={{marginRight: '5px', cursor: 'pointer'}}>{t('auth.hello')}</span>
          <CaretDownFilled className="arrow-down" />
        </div>
      </Dropdown>
    </div>
  );
};

export default UserInfo;
