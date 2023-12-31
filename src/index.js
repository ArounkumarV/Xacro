import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./components/home/home.jsx";
import Listing from "./components/home/listing.jsx";
import Inner from "./components/home/Inner.jsx";
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter ,createRoutesFromElements} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/listing' element={<Listing/>}/>
        <Route path='/Inner' element={<Inner/>}/>
    </Route>
    
  
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router }/>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
