import React from 'react';
import { Teaser } from '../../components/Teaser/Teaser';

export default {
  title: 'Cyberpunk/Teaser',
  component: Teaser,
};

const Template = (args) => <Teaser {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  punk: true,
  article: {
    title: 'My Teaser',
    slug: 'https://davidboland.site',
    description: 'The problem with our implementation is scaling. As we add more content types, or locations where content types get referenced, we need to add more to our GraphQL calls. In this post, I wanted to show how to clean up those calls with fragments.',
    publishDate: 'September 30th, 2020',
    tags: ['contentful', 'gatsby'],
    metaImage: {
      description: 'demo description',
      title: 'Teaser Image',
      url: 'http://images.ctfassets.net/advboymm7uww/yYEovloo4WprxC59c8HFP/958288e8e025bc12049ade05951c075c/nansen-gatsby-contentful.png?w=614&h=307&q=50&fit=scale',
    }
  }
};

Primary.decorators = [(Story) => <div style={{ backgroundColor:'#f2e900', color: '#000' }}><Story/></div>]