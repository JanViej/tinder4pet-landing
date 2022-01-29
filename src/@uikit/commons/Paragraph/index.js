import PropTypes from 'prop-types';
import ParagraphStyles from './styles';

const Paragraph = ({ title, contentFirst, contentSecond }) => (
  <ParagraphStyles className="paragraph">
    <div className="paragraph__title">{title}</div>
    <div className="paragraph__content paragraph__content-first">
      {contentFirst}
    </div>
    {contentSecond && (
      <div className="paragraph__content paragraph__content-second">
        {contentSecond}
      </div>
    )}
  </ParagraphStyles>
);

Paragraph.propTypes = {
  title: PropTypes.string,
  contentFirst: PropTypes.string,
  contentSecond: PropTypes.string,
};

export default Paragraph;
