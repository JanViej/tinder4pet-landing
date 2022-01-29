import PropTypes from 'prop-types';
import Image from 'components/Image';
import Slide from '@uikit/sections/Slide';
import styled from 'styled-components';

const ImageSlideStyles = styled.div`
  margin-bottom: 15px;

  .slick-slide > div > div {
    display: flex !important;
  }
  .ant-image {
    margin: auto auto 50px;
    img {
      height: auto;
      max-height: 480px;
      margin: auto;
      width: auto !important;
      user-select: none;
    }
  }

  .slick-dots-bottom {
    bottom: 20px;

    li {
      width: 6px !important;
      height: 6px !important;
      border: 1px solid #c4c4c4;
      border-radius: 50%;

      &.slick-active {
        width: 6px !important;
        height: 6px !important;

        button {
          background: #000 !important;
          width: 6px !important;
          height: 6px !important;
          border-radius: 50% !important;
        }
      }
    }
  }

  .slick-next__custom {
    right: 17px !important;
  }
  .slick-prev__custom {
    left: 17px !important;
  }
`;

const ImageSlide = ({ data = [] }) => (
  <ImageSlideStyles className="product-slide">
    <Slide
      variableWidth={false}
      showArrow={data?.length > 1}
      dots
      autoplay={false}
    >
      {data?.map((e, idx) => (
        <Image preview src={e} alt="e" maxWidth="987" key={String(idx)} />
      ))}
    </Slide>
  </ImageSlideStyles>
);

ImageSlide.propTypes = {
  data: PropTypes.array,
};

export default ImageSlide;
