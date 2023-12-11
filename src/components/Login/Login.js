import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import logo from './../../images/login-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './../../firebase';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const LogIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((auth) => {
            if (auth) {
                navigate('/');
            }
        }).catch((error) => {
            alert(error.message)
        })

    }
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((auth) => {
            if (auth) {
                navigate('/');
            }
        }).catch((error) => {
            alert(error.message)
        })
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img className="login-logo" src={logo} alt='logo_image' />
            </Link>

            <div className='login-container'>
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>

                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='login-signInBtn' type='submit' onClick={LogIn}>
                        Sign In
                    </button>

                    <p>
                        By continuing, you agree to Amazon's Fake Clone Conditions of Use
                        and Privacy Notice.
                    </p>
                    <button className="login-registerBtn" onClick={register}>
                        Create your Amazon Account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login