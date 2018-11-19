import React, { Component } from 'react'
import Classes from './components/Classes'
import Hooks from './components/Hooks'
class App extends Component {
  render () {
    return <div className="App">
      <div className="App-header">
      {
        this.props.useClasses 
        ? <Classes />
        : <Hooks />
      }
      </div>
    </div>
  }
}

App.defaultProps = {
  useClasses: true,
}

export default App
