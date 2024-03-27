import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';
import CustomerReviews from './Components/CustomerReviews/CustomerReviews.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/listedBooks',
        element:<ListedBooks></ListedBooks>
      },
      {
        path:'/pagesToRead',
        element:<PagesToRead></PagesToRead>
      },
      {
        path: '/customerReviews',
        element:<CustomerReviews></CustomerReviews>
      },
      {
        path: '/aboutUs',
        element:<AboutUs></AboutUs>,

      },
      {
        path:'/book/:id',
        element:<BookDetails></BookDetails>,
        loader:() => fetch('/books.json'),
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
