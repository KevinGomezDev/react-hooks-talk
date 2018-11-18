import React, { Component } from 'react'
import Classes from './components/Classes'
import Hooks from './components/Hooks'
class App extends Component {
  render () {
    return this.props.useClasses 
    ? <Classes />
    : <Hooks />
  }
}

App.defaultProps = {
  useClasses: true,
}

export default App
