import { useTranslation } from 'react-i18next'
import ShowCaseSection from '@uikit/sections/ShowCaseSection';
import { convertToI18nData } from 'utils/tools'
import Link from 'next/link';

const EditorChoice = () => {
  const { t } = useTranslation();
  return (
    <div className="editor-choice wrapper-full-height">
      <ShowCaseSection
        colProps={{
          md: 8,
        }}
        extra={(
          <div className="choice-section product-section">
            <div className="font-title section-title">
              {t('home.editorChoice')}
            </div>
            <div className="view-btn">
              <Link href="/blogs">
                <span className="link">
                  {t('button.viewAll')}
                </span>
              </Link>
            </div>
          </div>
        )}
        data={[
          {
            image: '/images/background1.png',
            title: {
              en: 'Ready to drink coffee',
              vi: 'Sẵn sàng để tận hưởng cà phê',
            },
            description: {
              en: 'Discover what we offer at store or deliver to your doorsteps. You can easy find what you love.',
              vi: 'Khám phá những gì chúng tôi cung cấp tại cửa hàng hoặc giao hàng tận nơi. Bạn có thể dễ dàng tìm thấy những gì bạn yêu thích. ',
            },
          },
          {
            image: '/images/background2.png',
            title: {
              en: 'Our Roasters',
              vi: 'Các nhà rang xay của chúng tôi',
            },
            description: {
              en: 'Discover what we offer at store or deliver to your doorsteps. You can easy find what you love.',
              vi: 'Khám phá những gì chúng tôi cung cấp tại cửa hàng hoặc giao hàng tận nơi. Bạn có thể dễ dàng tìm thấy những gì bạn yêu thích. ',
            },
          },
          {
            image: '/images/background3.png',
            title: {
              en: 'Our Roasters',
              vi: 'Các nhà rang xay của chúng tôi',
            },
            description: {
              en: 'Discover what we offer at store or deliver to your doorsteps. You can easy find what you love.',
              vi: 'Khám phá những gì chúng tôi cung cấp tại cửa hàng hoặc giao hàng tận nơi. Bạn có thể dễ dàng tìm thấy những gì bạn yêu thích. ',
            },
          },
        ]}
      />
    </div>
  )
}

export default EditorChoice;
