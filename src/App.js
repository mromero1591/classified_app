import React, {Component} from 'react';
import './App.scss';
import Axios from 'axios';
import {connect} from 'react-redux';

//Custom Imports
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import routes from '../src/routes';
import {updateItems} from './ducks/itemsReducer/itemsReducer';

class App extends Component {
  componentDidMount() {
    Axios.get('api/items')
    .then(res => {
      this.props.updateItems(res.data);
    }).catch(err => {
      console.log('Error in getting the data', err);
    })
  }
  render() {
    return (
      <main className="App">
        <NavBar />
        {routes}
        <Footer />
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items.items
  }
}

const mapDispatchToProps = {updateItems};

export default connect(mapStateToProps, mapDispatchToProps)(App);
