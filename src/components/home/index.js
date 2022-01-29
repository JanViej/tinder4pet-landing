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
        <IndexFeature buttonLink="/contact-us" className="wrapper-full-height" />
        <IndexFeature
          className="wrapper-full-height"
          isReversed
          buttonText={{
            en: 'Read our story',
            vi: 'Xem thêm về chúng tôi',
          }}
          buttonLink="/about-us"
          title={{
            en: 'Award-winning coffee from every corner of Asia',
            vi: 'Cà phê từng đoạt giải thưởng từ mọi nơi trên Châu Á ',
          }}
          description={{
            en: 'Enjoy a new coffee every time sent direct by the best craft roasters in the nation. Try hundreds of single origin, fair-trade, and even decaf coffees sourced from all across the world.',
            vi: 'Thưởng thức một ly cà phê mới mỗi lần được gửi trực tiếp bởi các nhà rang xay thủ công tốt nhất trên toàn quốc. Hãy thử hàng trăm loại cà phê có xuất xứ duy nhất, thương mại công bằng, và thậm chí cả cà phê decaf có nguồn gốc từ khắp nơi trên thế giới. ',
          }}
          image="/images/background4.png"
        />
        <EditorChoice />
        <div className="wrapper-container wrapper-full-height">

          <SubmitSection />
        </div>
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