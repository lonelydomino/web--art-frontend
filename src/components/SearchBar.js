import React from 'react'
class SearchBar extends React.Component{
    state = {
        query: ''
    }
  render(){   
     return (
         <div>
            <div class="wrap">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>

         </div>
     )
  }
}
export default SearchBar