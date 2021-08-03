import React from 'react'
import CategoryCard from '../components/AdCard'

class CategoryContainer extends React.Component{
    renderAdCards = (categories) =>{
        // debugger
    }
  render(){   
     return (
        <div>
            {this.renderCategoryCards(this.props.categories)}
        </div>
     )
  }
}
export default CategoryContainer