import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import Cart from './pages/Cart/Cart';
import Collections from './pages/Collections/Collections';
import HomeWarming from './pages/HomeWarming/HomeWarming';
import HomeWarmingList from './pages/HomeWarmingList/HomeWarmingList';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Payment from './pages/Payment/Payment';
import Posting from './pages/Posting/Posting';
import Detail from './pages/Detail/Detail';
import Signup from './pages/Signup/Signup';
import KakaoRedirect from './pages/Login/KakaoRedirect';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<Main />} />
          <Route path="/home-warming-list" element={<HomeWarmingList />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/home-warming/:id" element={<HomeWarming />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/collections" element={<Collections />} />
        </Route>
        <Route path="/auth/kakao/callback" element={<KakaoRedirect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posting" element={<Posting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
