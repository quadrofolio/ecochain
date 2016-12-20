import React from 'react'
import NavLink from './NavLink'

export default React.createClass({

  findArticle(articleSlug){
    var articles = this.props.routes[0].articles;
    for(var i=0; i< articles.length; i++){
      var a = articles[i];
      if( a.slug === articleSlug ) return a;
    };
  },

  render() {
    console.log('Article props',this.props);
    console.log('Article articles', this.props.routes[0].articles);
    const { articleSlug, theDate } = this.props.params;
    var a = this.findArticle(articleSlug);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
      <div>
        <div><NavLink to="/articles">Back to list</NavLink></div>
        <h3 className="article-title">{a.title}  <span className="article-date">{new Date(theDate).toLocaleString('en-US', options)}</span></h3>
        <img className="article-visual" src={a.visual} />
        <span className="article-body" dangerouslySetInnerHTML={{__html: a.body}}></span>
      </div>
    )
  }
})
