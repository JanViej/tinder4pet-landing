import PropTypes from 'prop-types';

import { ModalWrapper } from './styles';

const ModalCustom = ({ resetTopBody, className, ...props }) => (
  <ModalWrapper
    className={`${className || ''} ${resetTopBody ? 'reset-top-body' : ''}`}
    width={500}
    maskClosable={false}
    destroyOnClose
    {...props}
  />
);

ModalCustom.propTypes = {
  resetTopBody: PropTypes.bool,
  className: PropTypes.string,
};

ModalCustom.defaultProps = {};

export default ModalCustom;
