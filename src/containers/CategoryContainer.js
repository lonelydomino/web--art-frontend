import React from 'react'
import CategoryCard from '../components/CategoryCard'

class CategoryContainer extends React.Component{
    renderCategoryCards = (categories) =>{
       let cards = categories.map(category =>{
           return <CategoryCard key={category.id} category={category}/>
       })
       cards.length = 4
       return cards
    }
  render(){   
     return (
        <div id="category-container">
            {this.renderCategoryCards(this.props.categories)}
        </div>
     )
  }
}
export default CategoryContainer