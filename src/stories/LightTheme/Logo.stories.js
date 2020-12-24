import React from 'react';

import { Logo } from '../../components/Logo/Logo';

export default {
  title: 'Light Theme/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    
};
