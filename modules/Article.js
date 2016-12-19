import React from 'react'

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

    return (
      <div>
        <h2>{a.title}  <span className="article-date">{theDate}</span></h2>
        <img src={a.visual} className="article-visual" />
        <span dangerouslySetInnerHTML={{__html: a.body}}></span>
      </div>
    )
  }
})
