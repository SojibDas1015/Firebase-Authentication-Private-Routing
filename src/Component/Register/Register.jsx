import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Register = () => {
    const {resiterUser} = use(AuthContext)
    const handleOnSubmite = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        resiterUser(email, password)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
    }

    // const handleOnSubmite = (event) => {
    //     event.preventDefault()
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then(result =>{
    //         console.log(result)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }
    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-3xl font-bold">Registration now!</h1>
                <form onSubmit={handleOnSubmite}>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Registration</button>
                    </fieldset>
                </form>
                <p>if you have a account? please <NavLink className='text-blue-500 hover:text-blue-800' to={'/login'}>Login</NavLink></p>
            </div>
        </div>
    );
};

export default Register;