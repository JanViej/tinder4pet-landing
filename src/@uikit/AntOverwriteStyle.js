import { createGlobalStyle } from 'styled-components';

const AntOverwriteStyle = createGlobalStyle`
  div::-webkit-scrollbar-thumb {
    border-radius: 3px !important;
    background: var(--scrollbar-thumb) !important;
  }
  div::-webkit-scrollbar-track {
    background: var(--scrollbar-track) !important;
  }
  div::-webkit-scrollbar-thumb:hover {
    border-radius: 3px !important;
    background: var(--scrollbar-thumb) !important;
  }
  div::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background: var(--scrollbar-track) !important;
  }

  .loading {
    .ant-modal-content {
      background-color: transparent;
      box-shadow: none;
    }
  }
  .ant-layout {
    background-color: var(--bg-content);
  }
  .ant-slider-track {
    background-color: var(--primary);
  }
  .ant-slider-handle {
    border-color: var(--primary);
  }
  .ant-slider-rail {
    background-color: #e1e1e1 !important;
    height: 5px;
  }
  .ant-slider-handle {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background-color: var(--primary);
    border-color: var(--primary);
    transform: translate(-50%,-2px) !important;
  }

  @keyframes slideFromBottom {
    from {
      transform: translate(0px,100vh);
    }
    to {
      transform: translate(0px,0px);
    }
  }

  @keyframes noAnim {
    from {
    }
    to {
    }
  }

  @keyframes slideFromTopToBottom {
    from {
      transform: translate(0px,0px);
    }
    to {
      transform: translate(0px,100vh);
    }
  }

  
  .ant-modal-header {
    border-bottom: 0px;
    .ant-modal-title {
      font-size:24px;
      font-weight: bold;
    }
  }
  .ant-form-item-label {
    font-weight: bold;
    font-size: 14px;
  }

  .ant-select-item-option-selected {
      .ant-select-item-option-content{
        color: white !important;
      }
    }

    .ant-divider-horizontal {
      margin:15px 0px;
    }

    .ant-breadcrumb {
      font-size: var(--font-size-s);
      color: var(--text-primary);
      a {
        color: var(--text-primary);
      }
    }
`;

export default AntOverwriteStyle;
