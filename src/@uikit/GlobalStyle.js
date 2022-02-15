import { createGlobalStyle } from 'styled-components';
import { CSS_RESET, CSS_COMMON } from './css';

const GlobalStyle = createGlobalStyle`

  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: var(--font-family);
    margin: 0;
    padding: 0;
    background-color: #fff;
    scroll-behavior: smooth;
  }

  /* styles wrapper container */
  .wrapper-container {
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    max-width: 1550px;
    ${
      '' /* padding-left: 5%;
    padding-right: 5%; */
    }
    position: relative;
    width: 90%;
  
    ${
      '' /* @media only screen and (max-width: 425px) {
      width: calc(100% - 40px);
      padding-left: 20px;
      padding-right: 20px;
    } */
    }
  }

  .detail-wrapper-container {
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    max-width: 994px;
    position: relative;
    width: 90%;
  }

  .margin-section {
    margin: 18px 0 70px;
  }

  .landing-padding {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .landing-divider {
    margin: 40px 0 !important;
  }
  /** ---------------- */

.d-desktop {
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
}

.d-mobile {
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
}
.radio-group{
  width: 100%;
  .radio {
    display: flex;
    align-items: center;
    flex-flow: row-reverse;
    justify-content: space-between;
  }
}

  .ant-picker {
    background: var(--bg-input);
    width: 100%;
  }
  .ant-drawer-header {
    .ant-drawer-title {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 22px;
    }
  }

  .ant-drawer-body {
    padding: 10px 0;
    .drawer-title-item {
      padding: 10px 24px;
      font-weight: 700;
    }
    .menu-item {
      margin: 0;
      padding: 10px 24px;
    }
  }

  .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::after {
    display: inline-block;
    margin-right: 4px;
    color: #ff4d4f;
    font-size: 14px;
    font-family: Montserrat, sans-serif;
    line-height: 1;
    content: '*';
  }
  .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
    display: none;
  }
  
  .ant-layout,.ant-layout-content {
    max-width: 100vw;
    overflow-x: visible; 
  }
  
  ${
    '' /* a {
    color: #000;
    &:hover {
      color: var(--primary);
    }
  } */
  }
  
  .note {
    font-size: 12px;
    color: var(--text-note);
  }

  .description {
    font-size: 14px;
    color: var(--text-description);
  }


  .text-secondary {
    color: var(--text-secondary);
  }

  .text-gray {
    color: var(--text-note);
  }

  .text-primary {
    color: var(--text-primary);
  }

  .text-highlight {
    color: var(--primary);
  }


  .label {
    background-color: var(--bg-light);
    border-radius: 10px;
    text-align:center;
    display:inline-flex;
    justify-content: center;
    align-items:center;
    padding: 5px 20px;
  }

  .text-center {
    text-align: center !important;
  }
  
  h1 {
    font-size: 40px;
    font-weight: bold;
  }

  .btn-gray {
    background:var(--bg-gray) !important;
    border: 1px solid var(--bg-gray) !important;
  }

  .btn-dark-gray {
    background:var(----bg-gray) !important;
    border: 1px solid var(----bg-gray) !important;
  }

  .btn-gray-second {
    background: var(----bg-gray) !important;
    border: 1px solid var(----bg-gray) !important;
  }

  .btn-light-f5 {
    background: #F5F5F5 !important;
    border-color: #F5F5F5 !important;
  }
  
  .btn-light {
    background: #F9F9F9 !important;
    border-color: #F9F9F9 !important;
  }

  .btn-outline-primary {
    border-color: var(--primary) !important;
  }

  .overlay-popover-marker {
    .ant-popover-inner {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
    }
  }
  
  .overlay {
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 1000;
    background: rgba(255,255,255,100);
  }

  .hiddenCheckbox {
    display: none;
  }

  h2 {
    font-size: 20px;
    font-weight:bold;
  }
  /* START Fix input autofill background */
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active  {
      -webkit-box-shadow: 0 0 0 30px var(--bg-input) inset !important;
  }

  .ant-select {
    border-radius: 0;
  }

  .ant-input,
  ${'' /* .ant-input-prefix, */}
  .ant-input-number,
  .ant-select-selector {
    border-radius: 0 !important;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    border-bottom: 1px solid #ECECEC !important;
    padding: 10px 0;
    &:hover,
    &:focus,
    &:active {
      border-bottom: 1px solid #000 !important;
    }
  }

  

  .d-flex {
    display: flex;
  }
  .align-center {
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-between {
    justify-content: space-between;
  }

  .ant-input-affix-wrapper-focused {
    box-shadow: none;
  }

  .ant-input-affix-wrapper > input.ant-input {
    background: transparent;
    border: none !important;
  }

  .ant-select-focused {
    .ant-select-selector {
      border-bottom: 1px solid #000 !important;
    }
  }

  .ant-select-selector {
    padding-left: 0 !important;
  }

  /* END Fix input autofill background */
  .sticky {
    position: sticky;
    top: 0;
  }
  .shadow {
    box-shadow: var(--shadow);
    background:white;
  }
  .ellipsis-3-t {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-break: break-word;
  }

  .ellipsis-2-t {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
  }

  .ellipsis-t {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .light-bg {
    background: var(--bg-light);
  }

  .dark-bg {
    background: var(--bg-black);
  }

  /** START custom scrollbar only hover */

.custom-scrollbar {

  &::-webkit-scrollbar {
    height: 4px;
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent !important;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent !important;
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: var(--scrollbar-thumb) !important;
    }
  }
}
/** END custom scrollbar only hover */

/* START fix style Preview Image */
.ant-image-preview-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ant-image-preview-mask {
  background: black !important;
  
}
.ant-image-preview-operations {
  .anticon-rotate-left, .anticon-rotate-right {
    display: none;
  }
}

  /* END fix style Preview Image */
.bg-gray {
  background: var(--bg-light);
}  

.p-0 {
  padding:0px;
}

.p-10 {
  padding: 10px;
}
.p-20 {
  padding: 20px;
}

.following-btn {
  background: #32C12F !important;
  color: #fff !important;
  border-color: #32C12F !important;
}

.h-150 {
  height: 150vh !important;
}
.h-100 {
  height: 100vh !important;
}

.snap-scroll-container {
  overflow-y: scroll;
  max-height: 100vh;
  ${'' /* scroll-snap-points-y: repeat(90vh); */}
  scroll-snap-type: y proximity;
  ${'' /* scroll-snap-type: y mandatory; */}
}

.snap-scroll-child {
  height: 90vh;
  scroll-snap-align: start;
}
.snap-scroll-child-end {
  height: calc(100vh + 64px);
  scroll-snap-align: end;
}
.snap-scroll-child-banner {
  height: 90vh;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  ${'' /* padding-bottom: 32px; */}

  @media only screen and (max-width: 576px) {
    align-items: flex-start; 

    & > div {
      margin-top: 30px;
    }
  }
}

.wrapper-full-height {
  height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${'' /* & > div {
    width: 100%;
  } */}

  @media only screen and (max-width: 576px) {
    height: auto;
  }
}

.snap-scroll-child-center {
  height: 90vh;
  scroll-snap-align: end;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  ${'' /* padding-bottom: 32px; */}

  & > div {
    margin-top: 10vh;

    @media only screen and (max-width: 1460px) {
      margin-top: 30px;
    }

    @media only screen and (max-width: 576px) {
      margin-top: 0;
    }
  }
}

.scroll-wrapper {
  height: 100vh;
  line-height: 1.6;
  overflow: hidden;
}

.scroll-snap-container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}

.section-scrolling {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  scroll-snap-align: center;
}

.scroll-snap-start {
  scroll-snap-align: start;
}

  ${CSS_RESET}
  ${CSS_COMMON}
`;

export default GlobalStyle;
