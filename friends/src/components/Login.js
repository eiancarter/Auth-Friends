import React from 'react';

const Login = (props) => {
    const [credentials, setCredentials] = useState({
        name:'',
        age: 0,
        email: ''
    })

    const submitHandler = () => {
        e.preventDefault();
    }
    const changeHandler = () => {
        e.preventDefault();
    }
    return (
        <div className='login-form'>
            <form onSubmit={submitHandler}>
                <input
                    type='text'
                    onChange={changeHandler}
                    placeholder='username'
                />
                <input
                    type='text'
                    onChange={changeHandler}
                    placeholder='username'
                />
                <button>Create Account</button>
            </form>
        </div>
    )
}

export default Login; 