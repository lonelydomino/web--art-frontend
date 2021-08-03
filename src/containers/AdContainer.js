import React from 'react'
import AdCard from '../components/AdCard'

class AdContainer extends React.Component{
    renderAdCards = () =>{
        <AdCard />
    }
  render(){   
     return (
        <div>
            {this.renderAdCards()}
        </div>
     )
  }
}
export default AdContainer