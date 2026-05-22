import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import Aboutpage from './landing_page/about/Aboutpage';
import ProductsPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import NotFound from './landing_page/NotFound';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Login from './landing_page/login/Login';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <ToastContainer />
 <Navbar/>
 <Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/about' element={<Aboutpage/>}/>
  <Route path='/products' element={<ProductsPage/>}/>
  <Route path='/pricing' element={<PricingPage/>}/>
  <Route path='/support' element={<SupportPage/>}/>
  <Route path="/login" element={<Login />} />
  <Route path='*' element={<NotFound/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>
);

