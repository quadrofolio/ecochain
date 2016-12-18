import React from 'react'
import NavLink from './NavLink'
import LinkList from './LinkList'

export default React.createClass({
    render() {
        console.log('App.props.children', this.props.children);
        return (
          <div className="main">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/"><img src="/img/logo.png" /></a>
                    </div>
                    <div className="collapse navbar-collapse" id="main-nav">
                        <ul role="nav" className="nav navbar-nav main-navigation">
                            <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
                            <li><NavLink to="/articles">Articles</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="row">
                <div className="col-xs-8 main-content">
                    {this.props.children}
                </div>
                <div className="col-xs-4 side-content">
                    <LinkList articles={this.props.route.articles}/>
                </div>
            </div>
          </div>
        )
    }
})
