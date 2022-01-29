import { useImperativeHandle, useState, forwardRef } from 'react';
// import { useTranslation } from 'react-i18next';
// import PropTypes from 'prop-types';
import ModalCustom from '@uikit/commons/ModalCustom';

const HelpCenterModal = forwardRef((_props, ref) => {
  const [visible, setVisible] = useState(false);

  const onCancel = () => {
    setVisible(false);
  };

  useImperativeHandle(
    ref,
    () => ({
      open: () => {
        setVisible(true);
      },
    }),
    [],
  );

  return (
    <ModalCustom
      visible={visible}
      onCancel={onCancel}
      footer={null}
      width={800}
    />
  );
});

HelpCenterModal.propTypes = {};

export default HelpCenterModal;
