import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar'
import AdContainer from './containers/AdContainer'
import SearchBar from './components/SearchBar'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from './actions/categoryActions'
import { fetchItems } from './actions/itemActions'
import { addToCart } from './actions/shoppingCartActions';
import CategoryContainer from './containers/CategoryContainer';
import ItemsContainer from './containers/ItemsContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavWheel from './components/NavWheel';
import ItemPage from './components/ItemPage';
import ShoppingCart from './components/ShoppingCart';
import { updateQuery } from './actions/test';
import LoginPage from './components/LoginPage';
import withAuth from "./components/auth/withAuth";
import {signupUser} from './actions/auth.js'



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
        <Router>
        <SearchBar items={this.props.items}  updateQuery={this.props.updateQuery}/>
        <NavWheel />
        <NavBar categories={this.props.categories}/>
        <Switch>
        <Route
            exact
            path='/protected_route'
            component={withAuth(ShoppingCart)}
          />
            <Route exact path="/">
              <CategoryContainer categories={this.props.categories}/>
            </Route>
            <Route exact path="/category/:id">
              <ItemsContainer items={this.props.items} query={this.props.query} updateQuery={this.props.updateQuery}/>
            </Route> 
            <Route exact path="/search">
              <ItemsContainer items={this.props.items} query={this.props.items.query} updateQuery={this.props.updateQuery}/>
            </Route>
            <Route exact path="/login"><LoginPage signupUser={this.props.signupUser}/></Route>
            <Route exact path="/category/:categoryid/items/:itemid" render={routeProps => <ItemPage {...routeProps}/>} />
            <Route exact path="/cart">
              <ShoppingCart />
            </Route>
        </Switch>
        </Router>
        <AdContainer categories={this.props.categories}/>
      </div>
    );
  }
}

const mapStateToProps = currentState => {
  
  return {
    categories: currentState.categories.categories,
    loading: currentState.categories.loading,
    items: currentState.items.items,
    shoppingCart: currentState.shoppingCart.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchItems: () => dispatch(fetchItems()),
    addToCart: () => dispatch(addToCart()),
    updateQuery: (query) => dispatch(updateQuery(query)),
    signupUser: (credentials) => dispatch(signupUser(credentials))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)