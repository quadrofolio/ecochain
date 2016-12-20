import React from 'react'
import NavLink from './NavLink'

function ArticleShort(props) {
    var url = '/articles/'+props.slug+'/'+props.timestamp;
    var body = props.body;
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return(
        <div className="article short">
            <h3 className="article-title">{props.title}  <span className="article-date">{new Date(props.timestamp).toLocaleString('en-US', options)}</span></h3>
            <div dangerouslySetInnerHTML={{__html: body}}></div>
            <NavLink to={url}>Read full article</NavLink>
        </div>
    )
}

export default React.createClass({

  render() {
      var rows = [];
      var lastCategory = null;
      this.props.articles.forEach((a) => {
        rows.push(<ArticleShort title={a.title} slug={a.slug} timestamp={a.timestamp} body={a.body}/>);
      });
      return (
        <div>
            {rows}
        </div>
      )
  }
})
