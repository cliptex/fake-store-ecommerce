import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import '../src/styles/global.scss'

const root = createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)