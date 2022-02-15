import IndexBanner from '@uikit/sections/IndexBanner'
import ShowCaseSection from '@uikit/sections/ShowCaseSection'
import SubmitSection from '@uikit/sections/SubmitSection'
import IndexFeature from '@uikit/sections/IndexFeature'
import { useTranslation } from 'react-i18next'
import styled, { createGlobalStyle } from 'styled-components'
import Link from 'next/link';
import EditorChoice from './EditorChoice';

const OverwriteGlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    overflow: hidden;
  }
  .ant-layout-content {
    margin-bottom: 0px;
    padding-bottom: 0px !important;
  }
`;

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      {/* <OverwriteGlobalStyle /> */}
      <HomeWrapper>
        <IndexBanner />
        <ShowCaseSection className="show-case-scroll wrapper-full-height" />
        
        <IndexFeature
          className="wrapper-full-height"
          isReversed
          title={{
            en: 'What you can do',
            vi: 'What you can do',
          }}
          description={{
            en: 'Find your pet a friend anywhere, anytime with just a few clicks',
            vi: 'Find your pet a friend anywhere, anytime with just a few clicks',
          }}
          image="/images/bg5.png"
        />

        <IndexFeature
          buttonLink="/application"
          className="wrapper-full-height"
          title={{
            en: 'More than an app',
            vi: 'More than an app',
          }}
          description={{
            en: 'We create a port to connect user with vet or store which you can easily find what you really want',
            vi: 'We create a port to connect user with vet or store which you can easily find what you really want',
          }}
          buttonText="Be a part of us"
          image="/images/bg6.png"
        />
        {/* <EditorChoice />
        <div className="wrapper-container wrapper-full-height">

          <SubmitSection />
        </div> */}
      </HomeWrapper>
    </>
  )
}

const HomeWrapper = styled.div`
  .product-section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .section-title {
      font-size: 38px;
    }

    
  }
  .mobile-view-btn {
    display: none;
  }

  ${'' /* .choice-section {
    margin-bottom: 30px;
  } */}

  .product-list-scroll {
    margin-bottom: 40px;
  }

  @media only screen and (max-width: 576px) {
    .index-banner {
      height: 100% !important;
      aspect-ratio: 1 / 2.2;
    }

    .show-case-scroll {
      height: 100% !important;
      aspect-ratio: 1/2;
    }

    .product-list-scroll {
      height: 100% !important;
      ${'' /* aspect-ratio: 1/3.6; */}

      .view-btn {
        display: none;
      }

      .product-section {
        margin-top: 40px;
        justify-content: center;

        .section-title {
          font-size: 30px;
        }

        .filter-by-btn {
          display: none !important;
        }
      }

      .mobile-view-btn {
        display: flex;
        justify-content: center;
        margin-top: 40px;
      }
    }

    .index-feature {
      align-items: center;
      ${'' /* height: 100vh; */}
    }

    .editor-choice {
      .show-case-section {
        height: 100% !important;
      }
    }
  }
`

export default Home;