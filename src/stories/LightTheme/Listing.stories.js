import React from 'react';
import { Listing } from '../../components/Listing/Listing';
import Col from 'react-bootstrap/Col'

export default {
  title: 'Light Theme/Listing',
  component: Listing,
};

const Template = (args) => 

<Col md={6}>
    <Listing {...args} />
</Col>;

export const Primary = Template.bind({});
Primary.args = {
  articles:[
    {
        title: 'My Teaser 1',
        slug: 'https://davidboland.site',
        description: 'The problem with our implementation is scaling. As we add more content types, or locations where content types get referenced, we need to add more to our GraphQL calls. In this post, I wanted to show how to clean up those calls with fragments.',
        publishDate: 'September 30th, 2020',
        tags: ['contentful', 'gatsby'],
        metaImage: {
            description: 'demo description',
            title: 'Teaser Image',
            url: 'http://images.ctfassets.net/advboymm7uww/yYEovloo4WprxC59c8HFP/958288e8e025bc12049ade05951c075c/nansen-gatsby-contentful.png?w=614&h=307&q=50&fit=scale',
        }
    },
    {
        title: 'My Teaser 2',
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
  ]
};