import React from 'react';
import { NavBar } from '../../components/NavBar/NavBar';

export default {
  title: 'Light Theme/NavBar',
  component: NavBar,
};

const Template = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    punk: false
};