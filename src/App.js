import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar'
import AdContainer from './containers/AdContainer'
import SearchBar from './components/SearchBar'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from './actions/categoryActions'
import { fetchItems } from './actions/itemActions'
import CategoryContainer from './containers/CategoryContainer';
import ItemsContainer from './containers/ItemsContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCategories()
    this.props.fetchItems()
  }
  render(){
    return (
      <div className="App">
        <Banner />
        <SearchBar />
        <Router>
          <NavBar categories={this.props.categories}/>
          <Switch>
            <Route exact path="/">
              <CategoryContainer categories={this.props.categories}/>
            </Route>
            <Route path="/:id" component={ItemsContainer}/>
          </Switch>
        </Router>
        {/* <CategoryContainer categories={this.props.categories}/> */}
        <AdContainer categories={this.props.categories}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  
  return {
    categories: state.categoriesReducer.categories,
    loading: state.categoriesReducer.loading,
    items: state.itemsReducer.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchItems: () => dispatch(fetchItems())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)