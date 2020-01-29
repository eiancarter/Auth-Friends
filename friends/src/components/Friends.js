import React, { useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import FriendCard from './FriendCard';
import AddFriend from './AddFriend';


const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log(res)
                setFriends(
                    res.data
                    )
            })
            .catch(err => console.log(err))
    }, [setFriends]);
    return (
        <div>
            <AddFriend />
            {friends.map( friend => (
                <div key={friend.id}>
                    <FriendCard friend={friend} />
                </div>
            ))}
        </div>
    )
}

export default Friends;