import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage';
import Nav from './components/Nav';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Admin from './pages/Admin';
import OrderPage from './pages/OrderPage';
import ContentPage from './pages/ContentPage';
import RocketPage from './pages/RocketPage';
import Footer from './components/Footer';
import AdminDashboard from './pages/AdminDashboard';
import AdminProfile from './pages/AdminProfile';
import TermsPage from './pages/TermsPage';
import TestPostOrder from './components/TestPostOrder';
import LaunchSuccess from './components/AdminPage/LaunchSuccess';
import OrderConfirmation from './pages/OrderConfirmation';
import TrackOrder from './pages/TrackOrder';
import TrackOrderInfo from './pages/TrackOrderInfo';

//trackingID 

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPostOrder />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/order/confirmation/:id" element={<OrderConfirmation />} />
        <Route path="/trackorder" element={<TrackOrder />} />
        <Route path="/trackorder/:id" element={<TrackOrderInfo />} />
        <Route path="/rockets" element={<RocketPage />} />
        <Route path="/about" element={<ContentPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/dashboard/launchinfo" element={<LaunchSuccess />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
