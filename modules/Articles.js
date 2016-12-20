import React from 'react'
import ArticleList from './ArticleList'

export default React.createClass({

  render() {
    console.log('Articles.props.route.articles',this.props.route.articles)
    // console.log('Route.path == /articles ', this.props.route.path == '/articles' )
    // console.log('this.props.children', typeof this.props.children, this.props.children)
    // console.log('this.props.location.pathname',this.props.location.pathname);
    // console.log('articles',this.props.route.articles);

    var articles = this.props.route.articles

    const content = this.props.location.pathname == '/articles' ? <ArticleList articles={articles} /> : this.props.children;


    return (
      <div>
        <h2>Articles</h2>
        {content}
      </div>
    )
  }
})
