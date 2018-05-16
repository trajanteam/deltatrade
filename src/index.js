import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

import './index.scss'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

if (module.hot) {
  module.hot.accept('./App.js', () => {
    const NextApp = require('./App').default
    ReactDOM.render(<NextApp />, document.getElementById('root'))
    console.log('Hot module replaced..')
  })
}