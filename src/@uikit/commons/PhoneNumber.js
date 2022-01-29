import {Input,Select,Form} from 'antd';
import { COUNTRIES } from 'data';

const PhoneNumber = () => (
  <div className="d-flex">
    <div style={{ width: 100, marginRight: 10 }}>
      <Select className="w-100" defaultValue="84">
        {COUNTRIES.map((e) => (
          <Select.Option value={e.phone}>
            {`${e.emoji} +${e.phone}`}
          </Select.Option>
        ))}
      </Select>
    </div>
    <Form.Item name="phoneNumber">
      <Input placeholder="78 763 31 12" />
    </Form.Item>
  </div>
);

export default PhoneNumber;
