import { useImperativeHandle, useState, forwardRef } from 'react';
// import { useTranslation } from 'react-i18next';
// import PropTypes from 'prop-types';
import ModalCustom from '@uikit/commons/ModalCustom';

const FeedbackModal = forwardRef((_props, ref) => {
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
    >
      <iframe
        title="bosgaurus"
        className="airtable-embed p-t-30"
        src="https://airtable.com/embed/shry9ZuFqv3QHF0C7?backgroundColor=yellow"
        frameBorder={0}
        // onmousewheel
        width="100%"
        height={533}
        // style={{ background: 'transparent', border: '1px solid #ccc' }}
      />
    </ModalCustom>
  );
});

FeedbackModal.propTypes = {};

export default FeedbackModal;
