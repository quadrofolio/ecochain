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
        title: 'Article one',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto autem dignissimos fugiat harum, hic molestias recusandae reiciendis. Ab aut consequatur corporis dignissimos eveniet minima minus nemo rerum. Beatae, vel!</p>',
        visual: '/img/articles/visual.png',
        timestamp: '2017-01-01'
    },
    {
        id: 2,
        slug: 'article-two',
        title: 'Article two',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto autem dignissimos fugiat harum, hic molestias recusandae reiciendis. Ab aut consequatur corporis dignissimos eveniet minima minus nemo rerum. Beatae, vel!</p>',
        visual: '/img/articles/visual.png',
        timestamp: '2017-01-02'
    },
    {
        id: 3,
        slug: 'article-three',
        title: 'Article three',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto autem dignissimos fugiat harum, hic molestias recusandae reiciendis. Ab aut consequatur corporis dignissimos eveniet minima minus nemo rerum. Beatae, vel!</p>',
        visual: '/img/articles/visual.png',
        timestamp: '2017-01-03'
    },
    {
        id: 4,
        slug: 'article-four',
        title: 'Article four',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto autem dignissimos fugiat harum, hic molestias recusandae reiciendis. Ab aut consequatur corporis dignissimos eveniet minima minus nemo rerum. Beatae, vel!</p>',
        visual: '/img/articles/visual.png',
        timestamp: '2017-01-04'
    },
    {
        id: 5,
        slug: 'Article-five',
        title: 'article five',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto autem dignissimos fugiat harum, hic molestias recusandae reiciendis. Ab aut consequatur corporis dignissimos eveniet minima minus nemo rerum. Beatae, vel!</p>',
        visual: '/img/articles/visual.png',
        timestamp: '2017-01-05'
    },
    {
        id: 6,
        slug: 'article-six',
        title: 'Article six',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto autem dignissimos fugiat harum, hic molestias recusandae reiciendis. Ab aut consequatur corporis dignissimos eveniet minima minus nemo rerum. Beatae, vel!</p>',
        visual: '/img/articles/visual.png',
        timestamp: '2017-01-06'
    },
    {
        id: 7,
        slug: 'article-seven',
        title: 'Article seven',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto autem dignissimos fugiat harum, hic molestias recusandae reiciendis. Ab aut consequatur corporis dignissimos eveniet minima minus nemo rerum. Beatae, vel!</p>',
        visual: '/img/articles/visual.png',
        timestamp: '2017-01-07'
    },
    {
        id: 8,
        slug: 'article-eight',
        title: 'Article eight',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto autem dignissimos fugiat harum, hic molestias recusandae reiciendis. Ab aut consequatur corporis dignissimos eveniet minima minus nemo rerum. Beatae, vel!</p>',
        visual: '/img/articles/visual.png',
        timestamp: '2017-01-08'
    },
    {
        id: 9,
        slug: 'article-nine',
        title: 'Article nine',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto autem dignissimos fugiat harum, hic molestias recusandae reiciendis. Ab aut consequatur corporis dignissimos eveniet minima minus nemo rerum. Beatae, vel!</p>',
        visual: '/img/articles/visual.png',
        timestamp: '2017-01-09'
    },
    {
        id: 10,
        slug: 'article-ten',
        title: 'Article ten',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto autem dignissimos fugiat harum, hic molestias recusandae reiciendis. Ab aut consequatur corporis dignissimos eveniet minima minus nemo rerum. Beatae, vel!</p>',
        visual: '/img/articles/visual.png',
        timestamp: '2017-01-10'
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