import React from 'react';
import './App.scss';

//Custom Imports
import NavBar from './Components/NavBar/NavBar';
import routes from '../src/routes';

function App() {
  return (
    <main className="App">
      <NavBar />
      {routes}
    </main>
  );
}

export default App;
