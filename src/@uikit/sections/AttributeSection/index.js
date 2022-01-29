import { Row, Col, Image } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { formatI18nData } from 'utils/tools';

const AttributeSection = ({ title, attributes }) => {
  const { t } = useTranslation()
  return (
    
    <AttributeWrapperSection className="attribute-section-wrapper">
      {title && (
        <div className="font-title attribute-title">
          {formatI18nData(title)}
        </div> 
      )}
      <Row gutter={[20, 80]} className="attribute-section">
        {attributes.map(({ image, title, description, subTitle }, index) => (
          <Col md={8} xs={24} key={String(index)}>
            <div className="attribute-item">
              {image && (
                <Image className="section-image" preview={false} src={image} />
              )}
              <div className="font-title section-sub-title">
                {formatI18nData(subTitle)}
              </div>
              <div className="font-title section-title size-normal">
                {formatI18nData(title)}
              </div>
              <div className="section-description size-l">
                {formatI18nData(description)}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </AttributeWrapperSection>
  )}

const AttributeWrapperSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  min-height: 420px;
  padding: 80px 0;
  width: 100%;

  .attribute-title {
    font-size: 30px;
    margin-bottom: 80px;
    text-align: center;
  }

  .attribute-section {
    width: 100%;

    .attribute-item {
      max-width: 240px;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      text-align: center;

      .ant-image {
        margin-bottom: 24px;
        width: 60px;
        height: 60px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .section-sub-title {
        margin-bottom: 10px;
        color: #808080;
        text-transform: uppercase;
        font-size: 16px;
      }

      .section-title {
        margin-bottom: 10px;
        font-size: 20px;
      }

      .section-description {
        font-size: 16px;
      }
    }
  }
  
`

AttributeSection.defaultProps = {
  attributes: [
    {
      // image: '/images/coffee-icon.png',
      title: {
        en: 'Over 50 choices',
        vi: 'Hơn 50 lựa chọn',
      },
      description: {
        en: 'Vietnam’s best, handpicked and tasted by our in-house Q Grader',
        vi: 'Tốt nhất ở Việt Name, được lựa chọn và nếm thử bởi những nhà phê bình trong nước',
      },
    },
    {
      // image: '/images/coffee-icon.png',
      title: {
        en: 'Flexible Deliveries',
        vi: 'Giao hàng linh hoạt',
      },
      description: {
        en: 'Adjust your delivery dates, swap coffees, or cancel anytime',
        vi: 'Điều chỉnh ngày giao, đổi món hoặc huỷ bất cứ lúc nào',
      },
    },
    {
      // image: '/images/coffee-icon.png',
      title: {
        en: 'Ethically Sourced',
        vi: 'Uy tín nguồn cung',
      },
      description: {
        en: 'Champion small roasters with ethical and sustainable practices.',
        vi: 'Đứng đầu các nhà rang xay nhỏ bằng các hoạt động đúng mực đạo đức và bền vững.',
      },
    },
  ],
}

AttributeSection.propTypes = {
  title: PropTypes.string,
  attributes: PropTypes.array,
}

export default AttributeSection;
