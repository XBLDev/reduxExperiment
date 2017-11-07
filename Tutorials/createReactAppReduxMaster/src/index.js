import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './containers/app'

import 'sanitize.css/sanitize.css'
import './index.css'

const target = document.querySelector('#root')

// store.dispatch({ type: 'INCREMENT_TIMER'});

// setInterval( function() {
//   console.log('increment timer');
//   store.dispatch({
//     type : 'INCREMENT_TIMER'
//   })
// }, 1000 )

// setTimeout(function() {
//   console.log('increment timer called on index.js');
//   store.dispatch({
//     type: 'INCREMENT_TIMER'
//   })
// }, 0)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
