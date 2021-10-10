import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Login.css";

const Login = () => {
    const { signInusingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const Redirect_uri = location.state?.from || '/shop';

    const handleGoogleLogin = () => {
        signInusingGoogle()
            .then(result => {
                history.push(Redirect_uri);
            })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" id="" placeholder="Your Email" /><br />
                    <input type="password" id="" placeholder="Your Password" /><br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema-john website?? <Link to="/register">Create Account</Link></p>
                <div>--------------------or--------------------</div>
                <button className="btn-regular" onClick={handleGoogleLogin}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;