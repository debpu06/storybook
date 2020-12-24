import React from 'react';
import { Icon } from '../../components/Icon/Icon';

export default {
  title: 'Light Theme/Icon',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Github',
  url: 'https://github.com/debpu06',
  target: '_blank',
  title: 'Github Link'
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   children: 'Button_',
// };