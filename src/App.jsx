import { Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import About from './pages/about/About';
import Dashboard from './pages/dashboard/Dashboard';
import Layout from './layouts/Layout';
import TourList from './pages/tours/TourList';
import TourDetails from './pages/tours/TourDetails';
import WithAuth from "./auth/WithAuth";
import UnAuth from "./auth/UnAuth";
import Home from './pages/home/Home';
import { Suspense, lazy } from "react";
// import Checkout from './pages/checkout/Checkout'; 

function App() {
  const Cart = lazy(() => import("./pages/cart/Cart"));
  const Checkout = lazy(() => import("./pages/checkout/Checkout"));
  return (
    <div className="app-container mt-3">
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<UnAuth><Login /></UnAuth>} />
          <Route path="/register" element={<UnAuth><Register /></UnAuth>} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<WithAuth><Dashboard /></WithAuth>} />
          <Route path="/tours" element={<WithAuth><TourList /></WithAuth>} />
          <Route path="/tours/:id" element={<TourDetails />} />
          <Route path="/cart" element={<WithAuth><Cart /></WithAuth>} />
          <Route path="/checkout" element={<WithAuth><Checkout /></WithAuth>} />
          <Route path="/checkout/:id" element={<WithAuth><Checkout /></WithAuth>} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;