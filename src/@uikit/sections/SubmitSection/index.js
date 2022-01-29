import { Input, Button } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { formatI18nData } from 'utils/tools';

const SubmitSection = ({ title }) => {
  const { t } = useTranslation()
  return (
    
    <SubmitSectionWrapper>
      <div className="font-title submit-title">
        {formatI18nData(title)}
      </div> 
      <div className="form-section">
        <Input placeholder={t('input.email.placeholder')} suffix={<Button type="text">{t('button.submit')}</Button>} />
      </div>
    </SubmitSectionWrapper>
  )}

const SubmitSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 800px;
  margin: auto;
  min-height: 400px;

  .submit-title {
    font-size: 26px;
    margin-bottom: 40px;
    text-align: center;
  }

  .form-section {
    width: 100%;
    padding: 0 50px;

    .ant-input-affix-wrapper, .ant-input {
      background: #fff;
    }

    .ant-input-affix-wrapper {
      border: none;
      box-shadow: none;
      border-bottom: 1px solid #ECECEC;

      &:hover, &:focus {
        border-color: #000;
      }
    }
    .ant-input-affix-wrapper:focus, .ant-input-affix-wrapper-focused {
      border-color: #000;
    }
  }
`

SubmitSection.defaultProps = {
  title: {
    en: 'Stay fresh with the latest coffee tips, releases, & buzz you want to know!',
    vi: 'Luôn cập nhật các mẹo, bản phát hành và thông báo về cà phê mới nhất mà bạn muốn biết! ',
  },
}

SubmitSection.propTypes = {
  title: PropTypes.string,
}

export default SubmitSection;
