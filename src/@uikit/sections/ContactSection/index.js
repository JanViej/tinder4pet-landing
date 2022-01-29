import { Form, Input, Button, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import Breadcrumb from '@uikit/commons/Breadcrumb';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContactSection = ({ data }) => {
  const { t } = useTranslation()
  const [form] = Form.useForm()

  const breadcrumb = [
    {
      title: t('title.home'),
      href: '/',
    },
    {
      title: t('header.contactUs'),
      href: '/contact-us',
    },
  ];
  return (
    <ContactSectionWrapper className="wrapper-container">
      <Row gutter={[40, 40]}>
        <Col md={15} sm={15} xs={24}>
          <div className="address-section">
            <Breadcrumb data={breadcrumb} />
            <div className="font-title contact-title">
              {data?.title || t('contactUs.contactBOS')}
            </div>
            {data?.addresses?.map((address, index) => (
              <div key={String(index)} className="address-item">
                <div className="font-title size-18 address-item-title">
                  {t(address.name)}
                </div>
                <div>{[address.address, address.ward, address.district, address.city].join(', ')}</div>
                <div>{address.phoneNumber}</div>
                <div>{address.email}</div>
              </div>
            ))}
          </div>
        </Col>
        <Col md={9} sm={9} xs={24}>
          <div className="contact-section">
            <Form form={form} onFinish={() => {}}>
              <div className="size-20">
                {t('contactUs.formTitle')}
              </div>
              <Form.Item name="fullName" rules={[{required: true}]}>
                <Input placeholder={t('input.fullName.placeholder')} />
              </Form.Item>
              <Form.Item name="email" rules={[{required: true}]}>
                <Input placeholder={t('input.email.placeholder')} />
              </Form.Item>
              <Form.Item name="phone" rules={[{required: true}]}>
                <Input placeholder={t('input.phone.placeholder')} />
              </Form.Item>
              <Form.Item name="message" rules={[{required: true}]}>
                <Input.TextArea rows={6} placeholder={t('input.message.placeholder')} />
              </Form.Item>
              <div className="description size-12">
                {t('contactUs.formDesc')}
              </div>
              <Button type="primary" htmlType="submit" className="w-100">
                {t('button.send')}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </ContactSectionWrapper>
  )
}

const ContactSectionWrapper = styled.div`
  padding: 20px 0;
  height: calc(100vh - 64px);

  .contact-title {
    font-size: 40px;
  }

  .address-section {
    .address-item {
      margin-top: 40px;

      font-size: 16px;

      .address-item-title {
        margin-bottom: 10px;
      }
    }
  }

  .contact-section {
    padding-top: 30px;

    .description {
      color: #828282;
      margin-bottom: 20px;
    }
  }
`

ContactSection.propTypes = {
  data: PropTypes.object,
}

export default ContactSection
