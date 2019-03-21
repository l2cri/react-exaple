import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import './index.css';
import App from './container/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css'

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)
const rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
)
