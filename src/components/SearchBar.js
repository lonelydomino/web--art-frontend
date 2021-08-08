import React from 'react'
class SearchBar extends React.Component{
    state = {
        query: ''
    }
  render(){   
     return (
         <div>
            <div className="wrap">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
                    <button type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
         </div>
     )
  }
}
export default SearchBar