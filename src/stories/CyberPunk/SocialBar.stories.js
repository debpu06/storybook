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

Primary.decorators = [(Story) => <div style={{ backgroundColor:'#f2e900', color: '#000' }}><Story/></div>]