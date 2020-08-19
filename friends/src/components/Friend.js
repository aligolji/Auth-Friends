import React from 'react';

const Friend = (props) => {
    return (
        <div>
            <h4>from inside Friend</h4>
            <div className='friend'>
                <h3>Name: {props.friend.name} </h3>
                <h4>Age: {props.friend.age} years old</h4>
                <h4>Email Address: {props.friend.email} </h4>
            </div>
        </div>
    )
}


export default Friend
