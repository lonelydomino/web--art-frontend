import React from 'react'
import { NavLink } from 'react-router-dom'
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

// import React, { useState } from 'react';
// import {useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux';
// import { updateQuery } from '../actions/test';


// const handleChange = (e, setQuery) => {
//    setQuery(e.target.value)
// }
// const handleSubmit = (e, query, props) => {
//     e.preventDefault()
//     props.updateQuery(query)
// }
// const SearchBar = (props) => {
//     const [query, setQuery] = useState('')
//      return (
//         <div>
//             <div className="wrap">
//                 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
//                 <form className="search" onSubmit={(e) => handleSubmit(e, query , props)}>
//                     <input type="text" className="searchTerm" name="query" value={query} onChange={(e) => handleChange(e, setQuery)} placeholder="What are you looking for?"/>
//                     <button type="submit" className="searchButton" >
//                         <i className="fa fa-search"></i>
//                     </button>
//                 </form>
//             </div>
//         </div>
//      )
// }
// export default SearchBar