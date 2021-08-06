import React, { useReducer } from 'react'
import { useParams } from "react-router-dom";
import ItemCard from '../components/ItemCard';

const filterItems = (id, props) =>{
    let newId = parseInt(id)
    let sorted = props.items.filter(item => {
        return item.category.id === newId
    })
        return sorted
}
const renderItems = (id, props) => {
    
    let filteredItems = filterItems(id, props)
    return filteredItems.map(item => {
        return <ItemCard item={item} />
    })
}


const ItemsContainer = (props) => {
    const {id} = useParams()
     return (
        <div id="items-container">
            {renderItems(id, props)}
        </div>
     )
}
export default ItemsContainer

