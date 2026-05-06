import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import App10Week from './App10Week'
import './styles/globals.css'

function isTenWeekPath(): boolean {
  const path = window.location.pathname.replace(/\/+$/, '')
  return path === '/10week' || path === '/10week/'
}

const Root = isTenWeekPath() ? App10Week : App

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
