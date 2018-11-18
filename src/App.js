import React, { Component } from 'react';
import Row from './components/Row'
import Logo from './components/Logo'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <form>
            <Row>
              <label for='title'>Title</label>
              <input name='title' />
            </Row>
            <Row>
              <label for='summary'>Summary</label>
              <input name='summary' />
            </Row>
            <Row>
              <label for='rating'>Rating</label>
              <input name='rating' />
            </Row>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
