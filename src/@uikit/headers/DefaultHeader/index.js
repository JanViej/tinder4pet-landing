import { useRef, useEffect } from 'react';

// import PropTypes from 'prop-types';
import { Layout, Button, Image, Space } from 'antd';
import set from 'lodash/set';
import { MenuOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setModalConfig } from '@redux/config/actions';
import dynamic from 'next/dynamic';
import { HeaderStyles } from './styles';
import Link from '../../commons/Link';

// const LanguageDropdown = dynamic(() => import('./LanguageDropdown'), {
//   loading: () => <span />,
// });

const Header = () => {
  const mobileMenuModalRef = useRef();
  const mobileSearchRef = useRef();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    router.push('/application')
  };

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
            <div className="header-left">
              <Link href="/">
                <Space size={10} className="page-title font-title size-xl">
                  <Image
                    className="section-image"
                    preview={false}
                    src="/images/logo.png"
                    width={34}
                    style={{
                      marginTop: '20px',
                    }}
                  />
                  <span className="font-title text-highlight">
                    Tinder4pet
                  </span>
                </Space>
              </Link>
            </div>
            <div className="header-right">
              <Button type="primary" onClick={handleClick}>Be a part of us</Button>
            </div>
          </div>
        </Layout.Header>
      </HeaderStyles>
      {/* <DrawerMenuMobile ref={mobileMenuModalRef} />
      <DrawerSearchMobile ref={mobileSearchRef} /> */}
    </>
  );
};

Header.propTypes = {};

export default Header;
