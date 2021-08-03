import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar'
import AdContainer from './containers/AdContainer'
import SearchBar from './components/SearchBar'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from './actions/categoryActions'
import CategoryContainer from './containers/CategoryContainer';



class App extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCategories()
  }
  render(){
    return (
      <div className="App">
        <Banner />
        <SearchBar />
        <NavBar categories={this.props.categories}/>
        <CategoryContainer categories={this.props.categories}/>
        <AdContainer categories={this.props.categories}/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    categories: state.categories,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)