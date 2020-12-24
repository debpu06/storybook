import React from 'react';

import { Header } from '../../components/Header/Header';

export default {
  title: 'Light Theme/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const PrimaryH2 = Template.bind({});
PrimaryH2.args = {
  primary: true,
  children: 'Header',
};


export const SecondaryH2 = Template.bind({});
SecondaryH2.args = {
  primary: false,
  children: 'Header',
};
