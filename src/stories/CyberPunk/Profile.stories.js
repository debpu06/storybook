import React from 'react';
import { Profile } from '../../components/Profile/Profile';

export default {
  title: 'Cyberpunk/Profile',
  component: Profile,
};

const Template = (args) => <Profile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    url:'https://davidboland.site/static/8204b2edcd13c459964f2222584e67b4/48094/david-b-circle.png'
};

Primary.decorators = [(Story) => <div style={{ backgroundColor:'#f2e900', color: '#000' }}><Story/></div>]