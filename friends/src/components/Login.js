import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({
        username:'',
        password: '',
    })
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);
        axiosWithAuth()
        .post('/api/login', credentials)
        .then(res => {
            setIsLoading(false)
            console.log('authentication response', res);
            localStorage.setItem('token', res.data.payload);
            history.push('/Home');
        })
        .catch(err => console.log(err));
    }
        
    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value });
    }
    return (
        <div className='login-form'>
            <form onSubmit={submitHandler}>
                <input
                    type='text'
                    name='username'
                    onChange={handleChange}
                    placeholder='username'
                    value={credentials.username}
                    required
                />
                <input
                    type='password'
                    name='password'
                    onChange={handleChange}
                    placeholder='password'
                    value={credentials.password}
                    required
                />
                {
                    !!isLoading && <div>spinner</div>
                }
                <button>Sign In</button>
            </form>
        </div>
    )
};

export default Login; 