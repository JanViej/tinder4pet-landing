import styled from 'styled-components';

const ParagraphStyles = styled.div`
  .paragraph {
    &__title {
      font-weight: bold;
      font-size: 30px;
      line-height: 37px;
    }
    &__content {
      font-size: 16px;
      line-height: 22px;
    }
  }
  > div:not(:last-child) {
    margin-bottom: 26px;
  }
`;

export default ParagraphStyles;
