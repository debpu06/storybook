import React from 'react';

import { Header } from '../../components/Header/Header';

export default {
  title: 'Cyberpunk/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const PrimaryH2 = Template.bind({});
PrimaryH2.args = {
  primary: true,
  children: 'Header',
  punk: true
};

PrimaryH2.decorators = [(Story) => <div style={{ backgroundColor:'#292a2d', color: '#a9a9b3' }}><Story/></div>]


export const SecondaryH2 = Template.bind({});
SecondaryH2.args = {
  primary: false,
  children: 'Header',
  punk: true
};

SecondaryH2.decorators = [(Story) => <div style={{ backgroundColor:'#292a2d', color: '#a9a9b3' }}><Story/></div>]