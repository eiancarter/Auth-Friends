import React from 'react';

const Login = (props) => {
    const [credentials, setCredentials] = useState({
        name:'',
        age: 0,
        email: ''
    })

    const submitHandler = () => {
        e.preventDefault();
        setCredentials(credentials); 
        }
        
    }
    const handleChange = () => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setCredentials({...state, [name]: value });
    }
    return (
        <div className='login-form'>
            <form onSubmit={submitHandler}>
                <input
                    type='text'
                    onChange={handleChange}
                    placeholder='username'
                />
                <input
                    type='text'
                    onChange={handleChange}
                    placeholder='username'
                />
                <button>Create Account</button>
            </form>
        </div>
    )
}

export default Login; 