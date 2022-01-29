import PropTypes from 'prop-types';
import styled from 'styled-components';
import { formatI18nData } from 'utils/tools';

const TextBackgroundSection = ({ title }) => (
    
  <TextBackgroundSectionWrapper>
    <div className="font-title main-title" dangerouslySetInnerHTML={{ __html: formatI18nData(title) }} />
  </TextBackgroundSectionWrapper>
  )

const TextBackgroundSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #000;
  max-height: 730px;
  overflow: hidden;

  .main-title {
    font-size: 520px;
    line-height: 480px;
    text-align: center;
    color: #fff;
  }

  @media only screen and (max-width: 576px) {
    .main-title {
      font-size: 150px;
      line-height: 140px;
    }

    max-height: 220px;
  }
`

TextBackgroundSection.defaultProps = {
  title: {
    en: 'Arabica<br />Sữa Đá',
    vi: 'Arabica<br />Sữa Đá',
  },
}

TextBackgroundSection.propTypes = {
  title: PropTypes.string,
}

export default TextBackgroundSection;
