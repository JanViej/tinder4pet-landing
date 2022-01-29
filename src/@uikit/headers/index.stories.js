import DefaultHeader from './DefaultHeader';

export default {
  title: 'DefaultHeader',
};

const Template = (args) => <DefaultHeader {...args} />;

export const DefaultHeaderStorybook = Template.bind({});

DefaultHeaderStorybook.args = {
  title: '',
};

DefaultHeaderStorybook.parameters = {
  title: '',
};
