import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/screens/Home/Home'
import './assets/styles/global.css'
import Router from './components/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)

