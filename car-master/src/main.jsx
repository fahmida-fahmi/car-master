import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './routers/routes.jsx';
import Context from './share/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Context>
    <RouterProvider router={router}/>
  </Context>
  </React.StrictMode>,
)
