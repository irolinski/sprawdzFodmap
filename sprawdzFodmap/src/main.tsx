import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';

// export const path = 'wrazliwe-jelita';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter  basename={import.meta.env.DEV ? '/' : '/wrazliwe-jelita/'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
