// modules/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import About from './About'
import Articles from './Articles'
import Article from './Article'
import Home from './Home'

const blogData = [
    {
        id: 1,
        slug: 'article-one',
        title: 'article one',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto autem dignissimos fugiat harum, hic molestias recusandae reiciendis. Ab aut consequatur corporis dignissimos eveniet minima minus nemo rerum. Beatae, vel!</p>',
        visual: '/img/articles/visual.png',
        timestamp: '20170101'
    },
    {
        id: 2,
        slug: 'article-two',
        title: 'article two',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto autem dignissimos fugiat harum, hic molestias recusandae reiciendis. Ab aut consequatur corporis dignissimos eveniet minima minus nemo rerum. Beatae, vel!</p>',
        visual: '/img/articles/visual.png',
        timestamp: '20170102'
    },
    {
        id: 3,
        slug: 'article-three',
        title: 'article three',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto autem dignissimos fugiat harum, hic molestias recusandae reiciendis. Ab aut consequatur corporis dignissimos eveniet minima minus nemo rerum. Beatae, vel!</p>',
        visual: '/img/articles/visual.png',
        timestamp: '20170103'
    },
    {
        id: 4,
        slug: 'article-four',
        title: 'article four',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto autem dignissimos fugiat harum, hic molestias recusandae reiciendis. Ab aut consequatur corporis dignissimos eveniet minima minus nemo rerum. Beatae, vel!</p>',
        visual: '/img/articles/visual.png',
        timestamp: '20170104'
    },
    {
        id: 5,
        slug: 'article-five',
        title: 'article five',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto autem dignissimos fugiat harum, hic molestias recusandae reiciendis. Ab aut consequatur corporis dignissimos eveniet minima minus nemo rerum. Beatae, vel!</p>',
        visual: '/img/articles/visual.png',
        timestamp: '20170105'
    }
];

module.exports = (
  <Route path="/" component={App} articles={blogData} test="testing">
    <IndexRoute component={Home}/>
    <Route path="/articles" component={Articles} articles={blogData}>
      <Route path="/articles/:articleSlug/:theDate" component={Article}/>
    </Route>
    <Route path="/about" component={About}/>
  </Route>
)