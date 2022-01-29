import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import FormInputStyles from './styles';

const FormInput = ({
  name,
  label,
  required,
  messageRequire,
  placeholder,
  rules,
  ContentComponent,
  dependencies,
  valuePropName,
  combineInputLabel,
  formProps,
  ...props
}) => {
  const { t } = useTranslation();
  return (
    <FormInputStyles>
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
        dependencies={dependencies}
        valuePropName={valuePropName}
        {...formProps}
      >
        <ContentComponent placeholder={t(placeholder)} {...props} />
      </Form.Item>
    </FormInputStyles>
  );
};

FormInput.propTypes = {
  name: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  label: PropTypes.string,
  required: PropTypes.bool,
  messageRequire: PropTypes.string,
  placeholder: PropTypes.string,
  rules: PropTypes.array,
  ContentComponent: PropTypes.any,
  dependencies: PropTypes.any,
  valuePropName: PropTypes.string,
  combineInputLabel: PropTypes.bool,
  formProps: PropTypes.object,
};

FormInput.defaultProps = {
  rules: [],
  messageRequire: 'error.required',
  ContentComponent: Input,
};

export default FormInput;
