import { forwardRef, useImperativeHandle, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dynamic from 'next/dynamic'
import { setModalConfig } from '@redux/config/actions';

import {Space,Button} from 'antd';
import { useTranslation } from 'react-i18next';
import MobileMenuHeader from './MobileMenuHeader';

import { DrawerMenuMobileStyles } from './styles';

const LanguageDropdown = dynamic(() => import('./LanguageDropdown'), {
  loading: () => <span />,
});

const DrawerMenuMobile = forwardRef((_props, ref) => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  useImperativeHandle(ref, () => ({
    openModal: () => {
      setVisible(true);
    },
  }));

  const onCancel = () => setVisible(false);

  const handleClickLogin = () => {
    dispatch(
      setModalConfig({
        loginModal: true,
      }),
    );
  };

  return (
    <DrawerMenuMobileStyles
      width="100vw"
      visible={visible}
      onClose={onCancel}
      title=""
    >
      <Space size={20} direction="vertical" className="space-wrapper-modal">
        <MobileMenuHeader onCancel={onCancel} direction="vertical" />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <LanguageDropdown />
        </div>
        {/* {!isAuth && (
          <Button
            className="header-login-btn"
            type="primary"
            onClick={handleClickLogin}
          >
            {t('button.signIn')}
          </Button>
        )} */}
      </Space>
    </DrawerMenuMobileStyles>
  );
});

export default DrawerMenuMobile;
