import React, { useRef, useCallback } from 'react';
import { Carousel } from 'antd';
import PropTypes from 'prop-types';

import { SlideStyles } from './styles';
import {
  RightOutlineIcon,
  LeftOutlineIcon,
} from '../../commons/SVGIcons/index';

const Slide = ({ children, showArrow, className, variableWidth, ...props }) => {
  const carouselRef = useRef();

  const prevCarousel = useCallback(
    (e) => {
      e.stopPropagation();
      carouselRef.current && carouselRef.current.prev();
    },
    [carouselRef],
  );

  const nextCarousel = useCallback(
    (e) => {
      e.stopPropagation();
      carouselRef.current && carouselRef.current.next();
    },
    [carouselRef],
  );

  return (
    <SlideStyles>
      <div className="container-slide">
        <Carousel
          autoplay
          variableWidth={variableWidth}
          dots={false}
          ref={carouselRef}
          {...props}
          className={`${className || ''} ${
            variableWidth
              ? 'carousel-variable-width'
              : ''
          }`}
        >
          {React.Children.map(children, (child, idx) => (
            <div key={String(idx)}>{child}</div>
          ))}
        </Carousel>
        {showArrow && (
          <span
            className="slick-prev__custom slick-arrow-btn"
            role="presentation"
            onClick={prevCarousel}
          >
            <LeftOutlineIcon />
          </span>
        )}
        {showArrow && (
          <span
            className="slick-next__custom slick-arrow-btn"
            role="presentation"
            onClick={nextCarousel}
          >
            <RightOutlineIcon />
          </span>
        )}
      </div>
    </SlideStyles>
  );
};

Slide.propTypes = {
  showArrow: PropTypes.bool,
  variableWidth: PropTypes.bool,
  className: PropTypes.string,
};

Slide.defaultProps = {
  showArrow: true,
  variableWidth: true,
};

Slide.CMSProps = {};

export default Slide;
