import { LeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import BackButtonHeaderStyles from './styles';

const BackButtonHeader = ({ title }) => {
  const { back } = useRouter();

  return (
    <BackButtonHeaderStyles onClick={back} className="pointer">
      <LeftOutlined />
      {title}
    </BackButtonHeaderStyles>
  );
};

BackButtonHeader.propTypes = {
  title: PropTypes.string,
};

export default BackButtonHeader;
