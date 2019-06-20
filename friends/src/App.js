import React from 'react';
import Login from './components/Login';
import Friends from './components/Friends';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
          <Login />
          <Friends />
      </div>
    );
  }
}

export default App;
