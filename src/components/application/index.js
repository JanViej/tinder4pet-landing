import { useState } from 'react';
import firebase from 'api/firebase';
import { Result, Button, Form, Input, Card, Row, Col, Select, Divider } from 'antd';
import styled from 'styled-components';
import FormUpload from './FormUpload';

const BUSINESSES = [
  {
    value: 'VET',
    text: 'Vet',
  },
  {
    value: 'STORE',
    text: 'Pet store',
  },
]

const Application = () => {
  const [form] = Form.useForm();
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = values => {
    firebase.firestore().collection('applications').add({
      ...values,
      status: 'PENDING',
      cover: values.images[0],
    })
    form.resetFields();
    setIsSubmit(true);
  }

  return (
    <ApplicationWrapper>
      <div className="wrapper-container">
        {isSubmit ? (
          <Card>
            <Result
              status="success"
              title="Thank you for submitting your application!"
              subTitle="We will act on it as soon as possible"
              extra={[
                <Button type="primary" onClick={() => setIsSubmit(false)}>
                  Submit another application
                </Button>,
              ]}
            />
          </Card>
        ) : (
          <Card>
            <h2>Application Form</h2>
            <div>Submit this application to be a part of us</div>
            <br />
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Row gutter={20}>
                <Col span={24}>
                  <Divider orientation="left">Basic information</Divider>
                </Col>
                <Col span={12}>
                  <Form.Item name="name" label="Your business name">
                    <Input placeholder="Business name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="type" label="Your business" initialValue="VET">
                    <Select>
                      {BUSINESSES.map(business => (
                        <Select.Option key={business.value} value={business.value}>
                          {business.text}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="address" label="Address">
                    <Input placeholder="Address" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="admin" label="Owner name">
                    <Input placeholder="Owner name" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <FormUpload name="images" />
                </Col>
                <Col span={24}>
                  <Divider orientation="left">Contact information</Divider>
                </Col>
                <Col span={12}>
                  <Form.Item name="email" label="Email">
                    <Input placeholder="Email" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="phone" label="Phone number">
                    <Input placeholder="Phone number" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="description" label="Note">
                    <Input.TextArea rows={3} placeholder="Note" />
                  </Form.Item>
                </Col>
              </Row>
              <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Card>
        )}
      </div>
    </ApplicationWrapper>
  )}

const ApplicationWrapper = styled.div`
  padding: 60px;
`;

export default Application