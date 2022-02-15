import { Drawer, Menu } from 'antd';
import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    
  }
`;

export const HeaderStyles = styled.div`
  background: #fff;
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;

  .header-center {
    width: 370px;

    .page-title {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      font-size: 20px;
    }

    .logo {
      background-image: url('/images/logo.png');
      height: 40px;
      background-size: contain;
      background-repeat: no-repeat;
      ${'' /* transition: all 0.3s ease; */}
      animation-fill-mode: forward;

      &:hover {
        background-image: url('/images/collapsed-logo.png');
        background-position: center center;
        height: 40px;
        background-size: 50px;
        opacity: 0;
        ${'' /* transition: all 0.3s ease; */}
      }
    }
    .hide {
      opacity: 0;
    }
    .visible {
      opacity: 1 !important;
    }

    .fade-logo {
      animation: ${fade} 2s 1;
    }
  }

  .ant-layout-header {
    padding: 0 !important;
    ${'' /* border-bottom: 1px solid var(--border-color); */}
    border-bottom: none;
  }

  .mainHeader {
    background: transparent;
    transition: all 0.3s linear;

    @media only screen and (max-width: 576px) {
      width: 100vw !important;
    }
  }

  .header-wrapper {
    padding: 10px 0;
    background: #fff;
    height: 100%;

    .header-center {
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 10px;
      cursor: pointer;

      img {
        height: 100%;
        object-fit: contain;
      }

      ${
        '' /* @media only screen and (max-width: 1100px) {
        left: 0px;
        padding-left: 0px;
        transform: translate(0px, -50%);
      } */
      }
    }
  }

  .header-logo {
    margin-right: 10px;
    img {
      height: 30px;
    }
    cursor: pointer;
  }

  .header-search-input {
    max-width: 350px;
    border-radius: 10px;
    color: white;
    border: none;
    background: #f8f8f8;
    border-radius: 5px;
    .ant-input-suffix {
      color: #111111;
    }
  }

  .mobile-menu-icon {
    display: none;
    cursor: pointer;
    width: 30px;
    &:hover {
      transform: scale(1.1);
    }
  }

  .header-login-btn {
    border-color: inherit;

    &:hover {
      transform: scale(1.05);
    }
  }

  .header-desktop-menu {
    overflow: hidden;
    a {
      font-weight: 500;
      font-size: 14px;
      line-height: 15px;
      ${'' /* text-transform: uppercase; */}
      &:hover {
        transform: scale(1.1);
      }
    }
    .active {
      font-weight: 600;
      opacity: 0.5;
    }
  }

  .hiddenCheckbox {
    display: none;
  }

  .mobile-menu-icon,
  .header-login-btn,
  .header-national-flag {
    margin-left: 30px;
  }

  @media only screen and (max-width: 1100px) {
    .header-desktop-menu,
    .header-search-input {
      display: none;
    }
    .mobile-menu-icon {
      display: block;
    }
    .ant-layout-header {
      padding: 0px 20px;
    }
    .header-login-btn {
      display: none;
    }
  }

  @media only screen and (max-width: 678px) {
    .header-login-btn,
    .header-national-flag {
      margin-left: 10px;
    }

    .mobile-menu-icon {
      margin-left: 0px;
    }

    .header-wrapper {
      padding: 10px 16px !important;
    }
  }

  .dropdown-user {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 30px;

    .avatar-user {
      background: rgb(0, 0, 0);
      border: 1px solid rgb(255, 255, 255);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 5px;

      > .anticon {
        font-size: 14px;
      }
    }

    .arrow-down {
      font-size: 10px;
    }

    @media only screen and (max-width: 1024px) {
      margin-left: 15px;
    }
  }

  @media only screen and (max-width: 375px) {
    .header-login-btn,
    .header-national-flag {
      margin-left: 5px;
    }
  }

  @media only screen and (max-width: 576px) {
    .header-center {
      width: 100px;
      .logo {
        background-image: url('/images/collapsed-logo.png');
        background-repeat: no-repeat;
        background-position: center center;
        height: 40px;
        background-size: 80px;

        &:hover {
          height: 40px;
          background-size: 80px;
          ${'' /* transition: all 0.3s ease; */}
          animation: none;
        }
      }

      
    }

    .header-right {
      .languages-dropdown,
      .user-info {
        display: none !important;
      }

      .ant-btn {
        border-radius: 8px;
        background: var(--primary);
      }
    }
  }
`;

export const DrawerMenuMobileStyles = styled(Drawer)`
  .ant-drawer-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .header-group-button {
    margin-top: 30px;
    .ant-btn {
      width: 100%;
    }
  }
  .space-wrapper-modal {
    text-align: center;
    width: 100%;
    padding: 30px 0;
  }

  .header-mobile-menu {
    a {
      text-transform: uppercase;
    }
  }

  .m-auto {
    margin: auto;
  }

  .ant-drawer-header {
    border: 0;

    .ant-drawer-title {
      text-transform: unset;
      text-align: center;
      font-weight: 600;
      font-size: 20px;
    }
  }

  .header-search-input {
    .ant-input-prefix {
      margin-right: 20px;
    }
  }
`;

export const DropdownStyles = styled.div`
  width: 40px;
  .dropdown-flag {
    display: flex;
    align-items: center;
    &__img {
      width: 24px;
      margin-right: 5px;
    }
  }
`;

export const OverlayStyles = styled(Menu)`
  .language-menu-item {
    display: flex;
    align-items: center;
    &__img {
      margin-right: 10px;
      width: 24px;
    }
  }
`;
