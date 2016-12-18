import React from 'react'
import SearchBar from './SearchBar'
import NavLink from './NavLink'

export default React.createClass({
    getInitialState: function() {
        return {filterText: ''};
    },
    handleUserInput(filterText) {
        filterText = filterText.toLowerCase();
        this.setState({
            filterText: filterText
        });
    },

    render() {
        console.log('this LinkList',this, this.props.articles);
        var rows = this.props.articles.map((article) => {
            if (this.state.filterText.length && article.title.toLowerCase().indexOf(this.state.filterText) === -1 ) {
                return;
            }
            var link = "/articles/"+article.slug+"/"+article.timestamp;
            return (<li className="list-group-item" key={article.title}><NavLink to={link}>{article.title}</NavLink></li>);
        });
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    onUserInput={this.handleUserInput}
                />
                <ul className="list-group">
                {rows}
                </ul>
            </div>
        );
    }
})

