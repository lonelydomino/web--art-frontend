import React from 'react'
// import AdCard from '../components/AdCard'

class AdContainer extends React.Component{
    renderAdCards = (categories) =>{
        // debugger
    }
  render(){   
     return (
        <div>
            {this.renderAdCards(this.props.categories)}
        </div>
     )
  }
}
export default AdContainer