import React from 'react'
import  { Redirect} from 'react-router-dom'

class SearchBar extends React.Component{
    state = {
        query: '',
        isQuerySubmitted: false
    }

    

    handleClick = (query) => {
        this.props.updateQuery(query)
        this.setState({
            isQuerySubmitted: true
        })
        }
        
    handleChange = (e) => {
        
        this.setState({
            query: e.target.value
        })
    }
  render(){  
    if (!!this.state.isQuerySubmitted) {
        this.setState({
            isQuerySubmitted: false
        })
        return <Redirect push to="/search"/>
    } 
     return (
         <div>
            <div className="wrap">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
                <div className="search">
                    <input type="text" className="searchTerm" onChange={this.handleChange} placeholder="What are you looking for?"/>
                    <button type="submit" className="searchButton" onClick={() => this.handleClick(this.state.query, this.props.updateQuery)}>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
         </div>
     )
  }
}
export default SearchBar

