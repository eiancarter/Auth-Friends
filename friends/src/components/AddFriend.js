import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';



const AddFriend = (props) => {

    const [ newFriend, setNewFriend ] = useState({
        name: '',
        age: 0,
        email: ''
    })
    const [isLoading, setIsLoading] = useState(false);

    const submitFriend = (e) => {
        e.preventDefault();
        setIsLoading(true);
        axiosWithAuth()
        .post('/api/friends', newFriend)
        .then(res => {
            setIsLoading(false)
            console.log('submit response', res);
            localStorage.setItem('friend', res.data.payload);
        })
        .catch(err => console.log(err));
    }
    const changeHandler = (e) => {
        e.preventDefault();
        setNewFriend({...newFriend, [e.target.name]: e.target.value });
    }
    return (
        <div>
            <form onSubmit={submitFriend}>
                <input 
                    type='text'
                    name='name'
                    placeholder='name'
                    onChange={changeHandler}
                    value={newFriend.name}
                />
                <input 
                    type='text'
                    name='age'
                    placeholder='age'
                    onChange={changeHandler}
                    value={newFriend.age}
                />
                <input 
                    type='text'
                    name='email'
                    placeholder='email'
                    onChange={changeHandler}
                    value={newFriend.email}
                />
                {
                    !!isLoading && <div>spinner</div>
                }
                <button>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend;

