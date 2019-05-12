import React, {Component} from 'react';
import './App.scss';
import {connect} from 'react-redux';

//Custom Imports
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import routes from '../src/routes';
import {updateItems} from './ducks/itemsReducer/itemsReducer';

class App extends Component {
  render() {
    return (
      <main className="App">
        <NavBar />
        <div className="main-content">
          {routes}
        </div>
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
