import React from 'react'
import ArticleList from './ArticleList'

export default React.createClass({

  render() {
    console.log('Articles.props.route',this.props.route)
    // console.log('Route.path == /articles ', this.props.route.path == '/articles' )
    // console.log('this.props.children', typeof this.props.children, this.props.children)
    // console.log('this.props.location.pathname',this.props.location.pathname);

    const content = this.props.location.pathname == '/articles' ? 'ArticleList' : this.props.children;

    return (
      <div>
        <h2>Articles</h2>
        {content}
      </div>
    )
  }
})
