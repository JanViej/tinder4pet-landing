import { forwardRef, useImperativeHandle, useState } from 'react';
import { useRouter } from 'next/router';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { useTranslation } from 'react-i18next';
import { DrawerMenuMobileStyles } from './styles';

const DrawerSearchMobile = forwardRef((_props, ref) => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const { t } = useTranslation();

  useImperativeHandle(ref, () => ({
    openModal: () => {
      setVisible(true);
    },
  }));

  const onCancel = () => setVisible(false);

  return (
    <DrawerMenuMobileStyles
      width="100vw"
      visible={visible}
      onClose={onCancel}
      title="Search"
    >
      <Input
        className="header-search-input"
        placeholder={t('header.searchHeaderPlaceholder')}
        size="large"
        defaultValue={router?.query?.q}
        prefix={<SearchOutlined />}
      />
    </DrawerMenuMobileStyles>
  );
});

export default DrawerSearchMobile;
