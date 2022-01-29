import PropTypes, { string } from 'prop-types';
import { Form } from 'antd';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useTranslation } from 'react-i18next';
import FormPhoneInputStyles from './styles';

const FormPhoneInput = ({
  name,
  label,
  required,
  messageRequire,
  rules,
  combineInputLabel,
  inputExtraProps,
  defaultCountry,
}) => {
  const { t } = useTranslation();

  // const handleOnChange = (value, data, event, formattedValue) => {
  //   console.log(value, data, event, formattedValue, 'nhi');
  // };

  return (
    <FormPhoneInputStyles>
      <Form.Item
        className={combineInputLabel ? 'combine-input-label' : ''}
        label={t(label)}
        name={name}
        rules={[
          {
            required,
            message: t(messageRequire),
          },
          ...rules,
        ]}
      >
        <ReactPhoneInput
          inputExtraProps={inputExtraProps}
          country={defaultCountry}
          // onChange={handleOnChange}
          enableAreaCodes
          enableSearch
          // defaultMask='...-...-...'
          // alwaysDefaultMask
        />
      </Form.Item>
    </FormPhoneInputStyles>
  );
};

FormPhoneInput.propTypes = {
  name: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  label: PropTypes.string,
  required: PropTypes.bool,
  messageRequire: PropTypes.string,
  rules: PropTypes.array,
  combineInputLabel: PropTypes.bool,
  defaultCountry: string,
  inputExtraProps: PropTypes.object,
};

FormPhoneInput.defaultProps = {
  rules: [],
  messageRequire: 'error.required',
  defaultCountry: 'vn',
};

export default FormPhoneInput;
