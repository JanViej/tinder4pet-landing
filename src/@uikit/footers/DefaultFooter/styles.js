import styled from 'styled-components';

export const FooterStyles = styled.div`
  margin-bottom: ${({ isScroll }) => isScroll ? '90px' : '0'};
  z-index: 1000;

  .mainFooter {
    background: var(--bg-footer);
    color: var(--text-footer);
    transition: all 0.5s linear;
  }

  .ant-layout-footer {
    padding: 70px 0 40px 0 !important;
  }

  .footer-logo {
    height: 35px;
  }

  .footer-divider {
    background: rgba(255, 255, 255, 0.1);
    margin: 40px 0 30px;
  }

  a {
    color: var(--text-footer);
    font-size: 14px;
  }

  a:hover,
  a:focus {
    color: var(--text-footer) !important;
  }

  @media only screen and (max-width: 768px) {
    .footer-left {
      width: 100%;
      padding-bottom: 10px;
      > .ant-space-item {
        display: flex;
        justify-content: center;
      }
    }
    .ant-layout-footer {
      padding: 40px 0 !important;
    }
  }
  @media only screen and (max-width: 576px) {

    .menu-space-item {
        gap: 4px !important;
      }
      
      
    .footer-bottom {
      flex-direction: column;

      .footer-privacy-term {
        width: 100%;
      }

      .footer-copyright {
        margin-bottom: 10px;
      }
    }
  }
`;

export const FooterMenuStyle = styled.div``;
