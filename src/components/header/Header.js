import React from 'react'
import logo from './../../images/amazonLogo.png';
import search from './../../images/icons/searchIcon.png';
import shoppingCart from './../../images/icons/shopping-cart.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/GlobalState';
import { auth } from './../../firebase';

import './Header.css'
const Header = () => {
  const { user , basket } = useAuth();
  const handelAuthintication = () => {
    auth.signOut();
  }
  return (
    <div className='header'>
      <Link to='/'>
        <img className="header-logo" src={logo} alt='logoimage' />
      </Link>
      <div className='header-search'>
        <input className='header-searchInput' type='text' />
        <img className="header-searchIcon" src={search} alt='Search_image' />
      </div>

      <div className='header-nav' >
        <Link to={!user && '/login'}>
          <div className='header-option' onClick={handelAuthintication}>
            <div className='header-optionLineOne'>Hello {user ? `${user.email}` : "Guest"} </div>
            <div className='header-optionLinetwo'>{user ? `SignOut` : "Sign In"}</div>
          </div>
        </Link>

        <Link to='/orders'>
          <div className='header-option'>
            <div className='header-optionLineOne'>Return</div>
            <div className='header-optionLinetwo'>& Orders</div>
          </div>
        </Link>

        <div className='header-option'>
          <div className='header-optionLineOne'>Your</div>
          <div className='header-optionLinetwo'>Prime</div>
        </div>

        <Link to='/checkout'>
          <div className='header-optionBasket'>
            <img src={shoppingCart} alt='img' />
            <span className='header-optionLineTwo header-basketCount'>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default Header