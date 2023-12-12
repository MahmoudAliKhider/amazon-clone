import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Login from './components/Login/Login';
import { useAuth } from './context/GlobalState';
import { useEffect } from 'react';
import { auth } from './firebase';
import Home from './components/Home/Home';
import Checkout from './components/CheckOut/Checkout';
import Payment from './components/Payment/Payment';
import Order from './components/Orders/Order';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

function App() {
  const { dispatch } = useAuth();
  const stripePromise = loadStripe("pk_test_51OMWNPFtfSXxS9Bndfs9HyBgB0SZjrwHmqxRFouFrW9EmAVMtE9NciIejTWloWRQcJ7d9Z0NwV2wC7MFk52CPvGZ00z35PFyLF")
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch({
          type: "SET_USER",
          user: userAuth
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, []);

  return (
    <div >
      <Routes>
        <Route path='/' element={<>
          <Header />
          <Home />
        </>} />

        <Route path='/checkout' element={<>
          <Header />
          <Checkout />
        </>} />

        <Route path='/payment' element={
          <>
            <Header />
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </>
        } />

        <Route path='/orders' element={
          <>
            <Header />
            <Order />
          </>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<h1> Page Not Found </h1>} />
      </Routes>
    </div>
  );
}

export default App;
