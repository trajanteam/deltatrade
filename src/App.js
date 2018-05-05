import React, { Component } from 'react'

import Market from 'components/Market'
import Nav from 'components/Nav'
import SideBar from 'components/SideBar'

import './App.scss'

class App extends Component {
  componentDidMount() {
    console.log('app mounted')
  }

  render() {
    return (
      <div className="App">
        Welcome to the Delta Trade!
        <Market />
        <Nav />
        <SideBar />
      </div>
    )
  }
}

export default App
