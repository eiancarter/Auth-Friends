import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
    const [credentials, setCredentials] = useState({
        name:'',
        age: 0,
        email: ''
    })
    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        axios
      .post('http://localhost:5000/api/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/Home');
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
                    onChange={handleChange}
                    placeholder='name'
                    value={credentials.name}
                />
                <input
                    type='text'
                    onChange={handleChange}
                    placeholder='email'
                    value={credentials.email}
                />
                <button>Create Account</button>
            </form>
        </div>
    )
};

export default Login; 