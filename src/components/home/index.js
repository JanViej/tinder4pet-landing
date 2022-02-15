import IndexBanner from '@uikit/sections/IndexBanner';
import IndexFeature from '@uikit/sections/IndexFeature';
import styled, { createGlobalStyle } from 'styled-components';

const Home = () => (
  <>
    {/* <OverwriteGlobalStyle /> */}
    <HomeWrapper>
      <IndexBanner />
      {/* <ShowCaseSection className="show-case-scroll wrapper-full-height" /> */}

      <IndexFeature
        className="wrapper-full-height"
        isReversed
        title="What you can do"
        description="Find your pet a friend anywhere, anytime with just a few clicks"
        image="/images/bg5.png"
        extraContent={
          <div>
            <br />
            <li>Create beautiful profile</li>
            <li>Get match in your area</li>
            <li>Chat, video call, phone call</li>
            <li>Find a vet or pet store</li>
          </div>
          }
      />

      <IndexFeature
        buttonLink="/application"
        className="wrapper-full-height"
        title="More than an app"
        description="We create a port to connect user with vet or store which you can easily find what you really want"
        buttonText="Be a part of us"
        image="/images/bg6.png"
      />
      {/* <EditorChoice />
        <div className="wrapper-container wrapper-full-height">

          <SubmitSection />
        </div> */}
    </HomeWrapper>
  </>
  );

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

  ${
    '' /* .choice-section {
    margin-bottom: 30px;
  } */
  }

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
`;

export default Home;
