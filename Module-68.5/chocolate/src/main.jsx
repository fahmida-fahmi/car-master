import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Common from './Share/Common';
import ChocolateTable from './component/ChocolateTable';
import AddChocolate from './component/AddChocolate';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateChocolate from './component/UpdateChocolate';

const router = createBrowserRouter([
  
  {
      path: "/",
      element: <Common></Common>,
      children:[
        {
          path:'/',
          element: <ChocolateTable></ChocolateTable>,
          loader: () => fetch('http://localhost:4000/chocolate')
        },
        {
          path: '/addChocolate',
          element: <AddChocolate></AddChocolate>
        },
        {
          path:'updateChocolate/:id',
          element:<UpdateChocolate></UpdateChocolate>,
          loader: ({params}) => fetch(`http://localhost:4000/chocolate/${params.id}`)
        }
      ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
