import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Login from './components/Login/Login';

function App() {
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
