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
const categorySearch = (props, category) => {
    
}
const renderItems = (id = 0, props, query, category) => {
    if (id !== 0){
        let filteredItems = filterItems(id, props)
        return filteredItems.map(item => {
            return <ItemCard item={item} key={item.name} categoryId={id} />
        })
    }
    else if(query) {
        return filteredSearch(props, query).map(item => {
            return <ItemCard item={item} key={item.name} categoryId={id} />
        })
    }
    else if(category) {
        categorySearch(props, category).map(item => {
            return <ItemCard item={item} key={item.name} categoryId={id} />
        })
    }
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

