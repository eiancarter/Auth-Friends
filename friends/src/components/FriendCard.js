import React from 'react';

const FriendCard = ({ friend }) => {
    return (
        <div>
            <div>{friend.name}</div>
            <div>{friend.age}</div>
            <div>{friend.email}</div>
        </div>
    )
}

export default FriendCard;