import PropTypes from 'prop-types';
import { Image } from 'antd';

export const getImageUrl = (
  src,
  maxWidth,
  maxHeight,
  defaultSrc = 'https://image.artcific.com/default-thumbnail-3fda378e5d771f67.jpeg',
) =>
  // eslint-disable-next-line
  src?.indexOf('http') > -1
    ? src
    : src
    ? `${process.env.NEXT_PUBLIC_PHOTO_WITH_RESIZE}/${
        maxWidth ? `${maxWidth || 'AUTO'}x${maxHeight || 'AUTO'}/` : ''
      }${src}`
    : defaultSrc;

const Img = ({ maxWidth, maxHeight, preview, style, ...props }) =>
  // const restProps = {

  // }
  preview ? (
    <Image
      alt=""
      preview={false}
      style={{ objectFit: 'contain', ...style }}
      {...props}
      src={getImageUrl(props.src, maxWidth, maxHeight)}
    />
  ) : (
    <img
      alt=""
      {...props}
      layout="responsive"
      src={getImageUrl(props.src, maxWidth, maxHeight)}
    />
  );
Img.propTypes = {
  src: PropTypes.string,
  maxWidth: PropTypes.any,
  preview: PropTypes.bool,
  maxHeight: PropTypes.number,
  style: PropTypes.object,
};

Img.defaultProps = {
  preview: false,
};

export default Img;
