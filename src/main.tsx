import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import app from "./firebase";

console.log("app", app)


import { BrowserRouter } from 'react-router-dom'
// import AuthProvider from './apis/AuthContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </AuthProvider> */}
  </React.StrictMode>,
)
