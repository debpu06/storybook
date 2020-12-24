import React from 'react';
import { Button } from '../../components/Button/Button';

export default {
  title: 'Cyberpunk/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Button_',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button_',
};