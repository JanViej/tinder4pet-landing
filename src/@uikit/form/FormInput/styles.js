import styled from 'styled-components';

const FormInputStyles = styled.div`
  .combine-input-label {
    background: var(--bg-input);
    border-radius: 10px;
    .ant-form-item-label {
      padding: 10px 0 0 12px !important;
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;
    }
    .ant-input-affix-wrapper:hover,
    .ant-input-affix-wrapper:focus,
    .ant-input-affix-wrapper:active,
    .input-affix-wrapper-focused,
    .ant-input-affix-wrapper,
    .ant-input:hover,
    .ant-input:focus,
    .ant-input:active,
    .ant-input {
      border-color: var(--bg-input) !important;
      box-shadow: none;
    }
  }
`;

export default FormInputStyles;
