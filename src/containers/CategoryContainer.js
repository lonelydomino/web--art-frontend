import React from 'react'
import CategoryCard from '../components/CategoryCard'
import {connect} from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner'
import CustomizedSnackbars from '../components/FlashMessage'

class CategoryContainer extends React.Component{
    renderCategoryCards = (categories) =>{
       let cards = categories.map(category =>{
           return <CategoryCard key={category.id} category={category}/>
       })
       cards.length = 4
       return cards
    }
  render(){   
     if(this.props.loading){
        return<LoadingSpinner />
     }
     else {
     return (
        <>
        	{ this.props.showMessage ? <div className="flash-message"><CustomizedSnackbars message={this.props.message}/></div> : null}

        <div id="container1">
            <div id="category-container">
                  {this.props.categories ? this.renderCategoryCards(this.props.categories) : null}
            </div>
        </div>
        </>
     )
     }
  }
}
const mapStateToProps = (state) => {
   return {
      loading: state.categories.loading,
      categories: state.categories.categories,
      showMessage: state.auth.showMessage,
      message: state.auth.message
   }
}
export default connect(mapStateToProps)(CategoryContainer)