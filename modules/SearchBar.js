import React from 'react'

export default React.createClass({
    handleChange(){
        this.props.onUserInput(
            this.filterTextInput.value
        );
    },

    render(){
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    ref={(input) => this.filterTextInput = input}
                    onChange={this.handleChange}
                    className="form-control"
                />
            </form>
        );
    }
})