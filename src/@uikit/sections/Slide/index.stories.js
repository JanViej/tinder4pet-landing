import Slide from '.';
import { ThemeProviderUI } from '../../commons/ThemeProvider';

export default {
  title: 'Slide',
};
export const SlideStorybook = () => (
  <ThemeProviderUI>
    <Slide />
  </ThemeProviderUI>
);
