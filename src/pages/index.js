import { getServerSidePropsGenerator } from '@redux/store';
import HomeContainer from 'components/home'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  // const { data } = useGetByIdArtworksQuery({ data: { id: '160926573528754' } });
  return (
    <HomeContainer />
  )
}

export const getServerSideProps = getServerSidePropsGenerator(
  async ({ locale }) => ({
      ...(await serverSideTranslations(locale, ['common'])),
    }),
);
