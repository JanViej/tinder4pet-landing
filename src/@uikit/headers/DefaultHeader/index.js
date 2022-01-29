import { useRef, useEffect } from 'react';

// import PropTypes from 'prop-types';
import { Layout, Button } from 'antd';
import set from 'lodash/set';
import { MenuOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

import { setModalConfig } from '@redux/config/actions';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import { HeaderStyles } from './styles';
import DrawerMenuMobile from './DrawerMenuMobile';
import MenuHeader from './MenuHeader';
import DrawerSearchMobile from './DrawerSearchMobile';
import Link from '../../commons/Link';

// const LanguageDropdown = dynamic(() => import('./LanguageDropdown'), {
//   loading: () => <span />,
// });

const Header = () => {

  const mobileMenuModalRef = useRef();
  const mobileSearchRef = useRef();
  const dispatch = useDispatch();

  const { t } = useTranslation();

  // const handleClick = () => {
  //   window.location.pathname = '/';
  // };

  const handleClickLogin = () => {
    dispatch(
      setModalConfig({
        loginModal: true,
      }),
    );
  };

  const handleClickMenuIcon = () => {
    mobileMenuModalRef?.current && mobileMenuModalRef.current.openModal();
  };

  const openMobileSearch = () => {
    mobileSearchRef?.current && mobileSearchRef.current.openModal();
  };

  return (
    <>
      <HeaderStyles>
        <Layout.Header className="mainHeader wrapper-container">
          <div className="header-wrapper w-full flex-center-between">
            <div className="header-left d-flex">
              <Button
                onClick={handleClickMenuIcon}
                className="mobile-menu-icon"
                type="text"
                size="large"
                icon={<MenuOutlined />}
              />
              <MenuHeader />
              {/* <div className="header-logo">
                <Link href="/">
                  <img alt="logo" src="/svg/logo-dark.svg" />
                </Link>
              </div> */}

              {/* <Input
                className="header-search-input"
                placeholder={t('header.searchHeaderPlaceholder')}
                size="large"
                defaultValue={router?.query?.q}
                suffix={<SearchOutlined />}
              /> */}
            </div>
            <div className="header-center">
              <Link href="/">
                <div className="page-title font-title">TINDER4PET</div>
              </Link>
            </div>
          </div>
        </Layout.Header>
      </HeaderStyles>
      <DrawerMenuMobile ref={mobileMenuModalRef} />
      <DrawerSearchMobile ref={mobileSearchRef} />
    </>
  );
};

Header.propTypes = {};

export default Header;
