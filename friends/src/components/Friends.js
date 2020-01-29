import React, { useState, useEffect} from 'react';
import axios from 'axios';


const Friends = (props) => {
    const [friends, setFriends] = useState();

    useEffect = () => {
        axios
            .get('/')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <div>
            response from api
        </div>
    )
}

export default Friends;