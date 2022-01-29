import { Image, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { formatI18nData } from 'utils/tools';

const PartnersSection = ({ title, partners }) => (
    
  <PartnersSectionWrapper>
    <div className="font-title partner-title">
      {formatI18nData(title)}
    </div> 
    <div className="title-underline" />
    <div className="partners-section">
      {partners.map(partnerImage => (
        <div className="logo-section" key={partnerImage}>
          <Image preview={false} src={partnerImage} />
        </div>
        ))}
    </div>
  </PartnersSectionWrapper>
  )

const PartnersSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  min-height: 400px;
  width: 100%;

  .partner-title {
    font-size: 26px;
    margin-bottom: 20px;
    text-align: center;
  }

  .title-underline {
    height: 1px;
    width: 55px;
    background: #000;
    margin-bottom: 30px;
  }

  .partners-section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .logo-section {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      margin: 20px 50px;

    }
  }

`

PartnersSection.defaultProps = {
  title: {
    en: 'People talk about our coffee',
    vi: 'Những bên đánh giá về cà phê của chúng tôi',
  },
  partners: [
    // '/images/luxuo.png',
    '/images/sprudge.png',
    '/images/beeKrowd.png',
    '/images/vietcetera.png',
  ],
}

PartnersSection.propTypes = {
  title: PropTypes.string,
  partners: PropTypes.array,
}

export default PartnersSection;
