import styled from 'styled-components';
import { Layout } from 'antd';

export const PublicLayoutStyles = styled(Layout)`
  min-height: 100vh;
  .ant-layout-content {
    margin-top: 64px;
    ${'' /* padding-bottom: 30px; */}
    width: 100%;
    ${
      '' /* padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 576px) {
      max-width: 540px;
    }

    @media (max-width: 768px) {
      max-width: 720px;
    }

    @media (max-width: 992px) {
      max-width: 960px;
    }
    @media (max-width: 1200px) {
      max-width: 1140px;
    }
    @media (min-width: 1201px) {
      max-width: 1140px;
    }
    @media (min-width: 1441px) {
      max-width: 1240px;
    } */
    }
  }
`;
