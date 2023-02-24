import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import Cart from './pages/Cart/Cart';
import Collections from './pages/Collections/Collections';
import HomeWarming from './pages/HomeWarming/HomeWarming';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Payment from './pages/Payment/Payment';
import Posting from './pages/Posting/Posting';
import Detail from './pages/Detail/Detail';
import Products from './pages/Products/Products';
import Signin from './pages/Signin/Signin';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/home-warming" element={<HomeWarming />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/collections" element={<Collections />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posting" element={<Posting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
