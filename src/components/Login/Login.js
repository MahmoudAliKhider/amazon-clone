import React from 'react'
import logo from './../../images/login-logo.png';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='login'>
            <Link to='/'>
                <img className="login-logo" src={logo} alt='logo_image' />
            </Link>

            <div className='login-container'>
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type='email' value="" />
                    <h5>Password</h5>
                    <input type='password' value="" />
                    <button className='login-signInBtn' type='submit'>
                        Sign In
                    </button>

                    <p>
                        By continuing, you agree to Amazon's Fake Clone Conditions of Use
                        and Privacy Notice.
                    </p>
                    <button className="login-registerBtn" >
                        Create your Amazon Account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login