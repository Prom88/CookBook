import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import Router from './components/Router'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
      <Router />
    </Provider>
  </React.StrictMode>,
)

