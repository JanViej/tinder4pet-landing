import PropTypes from 'prop-types';
import { Image, Row, Col } from 'antd';
import { formatI18nData } from 'utils/tools';

import Link from '@uikit/commons/Link';
import styled from 'styled-components';

const ShowCaseSection = ({ className, data, colProps, extra }) => (
  <div className={`wrapper-container show-case-section ${className}`}>
    <div>
      {extra}
      <ShowCaseSectionWrapper className="show-case-section-content" gutter={[30, 60]}>
        {data.map(({ href, image, title, description }, index) => (
          <Col md={12} xs={24} {...colProps} key={String(index)}>
            <Image preview={false} src={image} />
            <Link href={href || '#'}>
              <div className="link font-title section-title size-normal">
                {formatI18nData(title)}
              </div>
            </Link>
            <div className="section-description size-l">
              {formatI18nData(description)}
            </div>
          </Col>
        ))}
      </ShowCaseSectionWrapper>
    </div>
  </div>
  )

const ShowCaseSectionWrapper = styled(Row)`
  padding: 80px 0;
  
  .ant-image {
    aspect-ratio: 5/3;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .section-title {
    line-height: 30px;
    margin-bottom: 8px;
    margin-top: 10px;
  }

  @media only screen and (max-width: 576px) {
    .section-title {
      font-size: 18px;
    }

    .section-description {
      font-size: 16px !important;
    }
  }
`

ShowCaseSection.defaultProps = {
  data: [
    {
      image: '/images/background1.png',
      title: {
        en: 'Ready to drink coffee',
        vi: 'Sẵn sàng để tận hưởng cà phê',
      },
      description: {
        en: 'Discover what we offer at store or deliver to your doorsteps. You can easy find what you love.',
        vi: 'Khám phá những gì chúng tôi cung cấp tại cửa hàng hoặc giao hàng tận nơi. Bạn có thể dễ dàng tìm thấy những gì bạn yêu thích. ',
      },
    },
    {
      image: '/images/background2.png',
      title: {
        en: 'Our Roasters',
        vi: 'Các nhà rang xay của chúng tôi',
      },
      description: {
        en: 'Discover what we offer at store or deliver to your doorsteps. You can easy find what you love.',
        vi: 'Khám phá những gì chúng tôi cung cấp tại cửa hàng hoặc giao hàng tận nơi. Bạn có thể dễ dàng tìm thấy những gì bạn yêu thích. ',
      },
    },
    // {
    //   image: '/images/background2.png',
    //   title: 'Our Roasters',
    //   description: 'Discover what we offer at store or deliver to your doorsteps. You can easy find what you love.',
    // },
  ],
}

ShowCaseSection.propTypes = {
  data: PropTypes.array,
  extra: PropTypes.node,
  colProps: PropTypes.object,
}

export default ShowCaseSection;
