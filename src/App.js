import React, { Component } from 'react'

import Layout from './Layout'

import './App.scss'

class App extends Component {
  componentDidMount() {
    console.log('app mounted')
  }

  render() {
    return (
      <Layout />
    )
  }
}

export default App
