import { getServerSidePropsGenerator } from '@redux/store';
import ApplicationContainer from 'components/application'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Application() {
  // const { data } = useGetByIdArtworksQuery({ data: { id: '160926573528754' } });
  return (
    <ApplicationContainer />
  )
}

export const getServerSideProps = getServerSidePropsGenerator(
  async ({ locale }) => ({
      ...(await serverSideTranslations(locale, ['common'])),
    }),
);
