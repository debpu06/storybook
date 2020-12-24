import React from 'react';

import { Logo } from '../../components/Logo/Logo';

export default {
  title: 'Cyberpunk/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    punk:true
};

Primary.decorators = [(Story) => <div style={{ backgroundColor:'#292a2d', color: '#a9a9b3' }}><Story/></div>]
