import styled from 'styled-components';

export const SlideStyles = styled.div`
  .container-slide {
    position: relative;
    ${'' /* margin-left: -10px; */}
  }
  .carousel-variable-width .slick-slide {
    padding-right: 20px;
  }

  .slick-arrow-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 35px;
    height: 35px;
    border: 1px solid #bebebe;
    background: var(--bg-content);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 35px;
    cursor: pointer;
    user-select: none;
  }

  .slick-prev {
    &__custom {
      left: -10px;
    }
  }
  .slick-next {
    &__custom {
      right: -18px;
    }
  }

  .ant-carousel .slick-list .slick-slide {
    pointer-events: all;
  }
`;
