import React, { useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const Friends = (props) => {
    const [friends, setFriends] = useState();

    useEffect(() => {
        axiosWithAuth
            .get('/api/friends')
            .then(res => {
                console.log(res)
                setFriends({
                    friends: res.friends
                })
            })
            .catch(err => console.log(err))
    }, [setFriends]);
    return (
        <div>
            {/* {friends.map( friend => {
                <div>{friend.name}</div>
            })} */}
        </div>
    )
}

export default Friends;