import PropTypes from 'prop-types';
import { ThemeProviderUI } from './ThemeProvider';

const ConfigProvider = ({ ...props }) => <ThemeProviderUI {...props} />;

ConfigProvider.propTypes = {
  i18nStore: PropTypes.object,
};

export default ConfigProvider;
