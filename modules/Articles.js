import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Articles</h2>
        {this.props.children}
      </div>
    )
  }
})
