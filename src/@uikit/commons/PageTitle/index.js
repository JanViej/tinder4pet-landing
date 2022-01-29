import PropTypes from 'prop-types';
import { PageTitleStyles } from './styles';

export default function PageTitle({ title, center, className }) {
  return (
    <PageTitleStyles
      className={`${className || ''} ${center ? 'text-center' : ''}`}
    >
      {title}
    </PageTitleStyles>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string,
  center: PropTypes.bool,
  className: PropTypes.string,
};
