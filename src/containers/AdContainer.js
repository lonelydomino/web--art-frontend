import React from 'react'

class AdContainer extends React.Component{
    renderAdCards = (categories) =>{
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