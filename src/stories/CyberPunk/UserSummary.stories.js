import React from 'react';
import { UserSummary } from '../../components/UserSummary/UserSummary';

export default {
  title: 'Cyberpunk/User Summary',
  component: UserSummary,
};

const Template = (args) => <UserSummary {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    punk: true,
    name: 'David Boland',
    description: 'Blogging about web, mobile, and whatever other tech stuff I come across. I work a lot with content management systems. I am an Episerver MVP, and a Contentful certified developer.',
    imageUrl: 'https://davidboland.site/static/8204b2edcd13c459964f2222584e67b4/48094/david-b-circle.png'
};

Primary.decorators = [(Story) => <div style={{ backgroundColor:'#f2e900', color: '#000' }}><Story/></div>]