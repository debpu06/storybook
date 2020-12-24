import React from 'react';
import { SocialBar } from '../../components/SocialBar/SocialBar';

export default {
  title: 'Cyberpunk/Social Bar',
  component: SocialBar,
};

const Template = (args) => <SocialBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    punk: true
};

Primary.decorators = [(Story) => <div style={{ backgroundColor:'#292a2d', color: '#a9a9b3' }}><Story/></div>]