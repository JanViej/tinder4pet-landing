import { useState, useEffect } from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { i18n, useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import moment from 'dayjs';

import { Cookies } from 'react-cookie';
import { OverlayStyles, DropdownStyles } from './styles';

const customParseFormat = require('dayjs/plugin/customParseFormat');

moment.extend(customParseFormat);

const LANGUAGES = {
  en: {
    value: 'en',
    imageSrc: '/svg/united-kingdom.svg',
    text: 'languages.en',
  },
  vi: {
    value: 'vi',
    imageSrc: '/svg/vietnam.svg',
    text: 'languages.vi',
  },
};

const LanguageDropdown = () => {
  const { t, i18n: reactI18n } = useTranslation();
  const router = useRouter();

  const handleChangeLangue = (value) => {
    moment.locale(value);
    router?.replace(router.asPath || '', router.asPath || '', {
      locale: value,
    });
    i18n.changeLanguage(value);
    reactI18n.changeLanguage(value);
  };

  const menu = (
    <div>
      {Object.values(LANGUAGES).map((item) => (
        <Menu.Item
          key={item.value}
          onClick={() => handleChangeLangue(item.value)}
        >
          <div className="language-menu-item">
            <img
              alt=""
              className="language-menu-item__img"
              src={item.imageSrc}
            />
            {t(item.text)}
          </div>
        </Menu.Item>
      ))}
    </div>
  );

  return (
    <div className="d-flex languages-dropdown">
      {Object.keys(LANGUAGES).map((key, index) => (
        <div
          role="presentation"
          className={`pointer ${
            LANGUAGES[key].value !== reactI18n.language ? 'text-gray' : ''
          }`}
          key={key}
          onClick={() => handleChangeLangue(LANGUAGES[key].value)}
        >
          {t(LANGUAGES[key].text)}
          {index < Object.keys(LANGUAGES).length - 1 && (
            <span className="text-primary">&nbsp;/&nbsp;</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default LanguageDropdown;
