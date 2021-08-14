import React, { useReducer } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import ItemCard from '../components/ItemCard';

const filterItems = (id, props) =>{
    let newId = parseInt(id)
    let sorted = props.items.filter(item => {
        return item.category.id === newId
    })
        return sorted
}
const filteredSearch = (props, query) => {
    return props.items.filter(item => {
        return item.name.toUpperCase().includes(query.toUpperCase())
    })
}
const renderItems = (id = 0, props, query) => {
    if (id !== 0){
        let filteredItems = filterItems(id, props)
        return filteredItems.map(item => {
            return <ItemCard item={item} categoryId={id} />
        })
    }
    if(query) {
        return filteredSearch(props, query).map(item => {
            return <ItemCard item={item} categoryId={id} />
        })
    }
    debugger
}


const ItemsContainer = (props) => {
    const {id} = useParams()
    const query = useSelector(state => state.items.query)

     return (
        <div className="items-container">
            {renderItems(id, props, query)}
        </div>
     )
}
export default ItemsContainer

