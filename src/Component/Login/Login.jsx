import React, { use } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Login = () => {
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    const { loginUser } = use(AuthContext)  
    const handleLoginForm = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        loginUser(email, password)
            .then(result => {
                console.log(result)
                navigate(location.state || '/')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <form onSubmit={handleLoginForm}>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
                <p>if you new a website? please <NavLink className='text-blue-500 hover:text-blue-800' to={'/register'}>Register</NavLink></p>
            </div>
        </div>
    );
};

export default Login;