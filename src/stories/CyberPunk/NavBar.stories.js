import React from 'react';
import { NavBar } from '../../components/NavBar/NavBar';

export default {
  title: 'Cyberpunk/NavBar',
  component: NavBar,
};

const Template = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    punk: true,
    primary: true
};

Primary.decorators = [(Story) => <div style={{ backgroundColor:'#292a2d', color: '#a9a9b3' }}><Story/></div>]

export const Secondary = Template.bind({});
Secondary.args = {
  punk: true,
  primary:false
};

Secondary.decorators = [(Story) => <div style={{ backgroundColor:'#292a2d', color: '#a9a9b3' }}><Story/></div>]