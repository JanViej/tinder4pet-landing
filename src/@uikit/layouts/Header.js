import { useEffect } from 'react';
import DefaultHeader from '@uikit/headers/DefaultHeader';
import dynamic from 'next/dynamic';
import isEmpty from 'lodash/isEmpty';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from 'utils';
import { setInitHeader } from 'utils/request';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <>
      <DefaultHeader />
    </>
  );
};

export default Header;
