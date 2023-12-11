import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Login from './components/Login/Login';
import { useAuth } from './context/GlobalState';
import { useEffect } from 'react';
import { auth } from './firebase';
function App() {
  const { dispatch } = useAuth();

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
        <Route path='/' element={<Header />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<h1> Page Not Found </h1>} />
      </Routes>
    </div>
  );
}

export default App;
