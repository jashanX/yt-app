import React from "react";

class SearchBar extends React.Component{
    state = {
        term:""
    }
    handleChange = (evt) => {
        this.setState({
            term : evt.target.value
        })
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        
        this.props.onFormSubmit(this.state.term);
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit} className="ui form"> 
                <input 
                    type='text' 
                    value={this.state.term} 
                    onChange={this.handleChange}
                    placeholder="Search"
                />
            </form>
        );
    }
}
export default SearchBar;