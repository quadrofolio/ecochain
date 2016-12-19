import React from 'react'
import Article from './Article'

export default React.createClass({

  render() {
    // console.log('Articles.props.route',this.props.route)
    // console.log('Route.path == /articles ', this.props.route.path == '/articles' )
    // console.log('this.props.children', typeof this.props.children, this.props.children)
    //console.log('this.props.location.pathname',this.props.location.pathname);

    const content = ''; //this.props.location.pathname == '/articles' ? <ActicleList articles={this.props.route.articles} /> : this.props.children;

    return (
      <div>
        {content}
      </div>
    )
  }
})
