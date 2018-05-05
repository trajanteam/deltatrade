import React, { Component } from 'react'

import Market from 'components/Market'

import './App.scss'

class App extends Component {
  componentDidMount() {
    const hello = {
      hello: 'sdfm',
      asdasd: 'sdfm',
    }
    console.log('app mounted', hello)
  }

  render() {
    return (
      <div className="App">
        Welcome to the Delta Trade!
        <Market />
      </div>
    )
  }
}

export default App
