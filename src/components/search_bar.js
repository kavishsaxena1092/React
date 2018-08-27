import React from 'react';
import ReactDOM from 'react-dom';

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state = { term: ''}
    }

    render(){
        return (<div className="search-bar">
        <input value = {this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
        Value of the input: {this.state.term}
        </div>
        );
    }

    

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default Searchbar;