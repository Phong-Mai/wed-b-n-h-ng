import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/Home';
import Productsphone from './pages/Productsphone'
import Productsiphone from './components/Productsiphone';
import Productssamsung from './components/Productssamsung';
import Productsoppo from './components/Productsoppo';
import Productsxiaomi from './components/Productsxiaomi';
import Detail from './components/Detail';
import Productslaptop from './pages/Productslaptop';
import Productsearphone from './pages/Productsearphone';
import Productstablet from './pages/Productstablet';
import Productswatch from './pages/Productswatch';
import Login from './components/Login';
import Cart from './components/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Search from './components/search/Search';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    //errorElement: <NotFound/>,
    // children:[
    //   {
    //     path: "/detail/:id"
    //   }
    // ]
  },
  {
    path: "/detail/:detailId",
    element: <Detail/>
  },
  {
    path: "/login",
    element : <Login/>
  },
  {
    path: "/cart",
    element : <Cart/>
  },
  {
    path: "/productsphone",
    element: <Productsphone/>
  },
  {
    path: "/productslaptop",
    element: <Productslaptop/>
  },
  {
    path: "/productstablet",
    element: <Productstablet/>
  },
  {
    path: "/productsearphone",
    element: <Productsearphone/>
  },
 
  {
    path: "/productswatch",
    element: <Productswatch/>
  },
  {
    path: "/productssamsung",
    element: <Productssamsung/>
  },
  {
    path: "/productsiphone",
    element: <Productsiphone/>
  },
  {
    path: "/productsoppo",
    element: <Productsoppo/>
  },
  {
    path: "/productsxiaomi",
    element: <Productsxiaomi/>
  },
  {
    path: "/search",
    element: <Search/>
  }

]);
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer></ToastContainer>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>


);



reportWebVitals();
