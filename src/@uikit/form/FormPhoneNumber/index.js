import { Form, Select, Input } from 'antd';
import { COUNTRIES } from 'data';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const PhoneNumber = ({ disabled, noLabel, required }) => {
  const { t } = useTranslation();
  return (
    <div>
      {!noLabel && (
        <div className="ant-form-item-label">
          <label>{t('input.phoneNumber.label')}</label>
        </div>
      )}
      <div className="d-flex">
        <div style={{ width: 100, marginRight: 10 }}>
          <Form.Item name="phoneCode" initialValue="84">
            <Select className="w-100" disabled={disabled} allowClear={false}>
              {COUNTRIES.map((e, idx) => (
                <Select.Option value={e.phone} key={String(idx)}>
                  {`${e.emoji} +${e.phone}`}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        <Form.Item
          className="w-100"
          name="phoneNumber"
          rules={[
            {
              required,
              message: t('input.phoneNumber.validateMsg.required'),
            },
          ]}
        >
          <Input placeholder="78 763 31 12" disabled={disabled} />
        </Form.Item>
      </div>
    </div>
  );
};

PhoneNumber.propTypes = {
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  noLabel: PropTypes.bool,
};

export default PhoneNumber;
