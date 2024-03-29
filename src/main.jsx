import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ReactGA from 'react-ga4'

ReactGA.initialize("G-3W7R7J3VMK");

ReactGA.send({ hitType: "pageview", page: window.location.pathname });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
