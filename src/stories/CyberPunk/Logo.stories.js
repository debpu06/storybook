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

Primary.decorators = [(Story) => <div style={{ backgroundColor:'#f2e900', color: '#000' }}><Story/></div>]
