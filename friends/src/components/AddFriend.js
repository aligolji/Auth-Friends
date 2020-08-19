import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function AddFriend() {
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChanges = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        });
    };

    const handleAdd = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', friend)
            .then(res => {
                console.log(res)
                setFriend({
                    name: '',
                    age: '',
                    email: ''
                });
            });
    }

    return (
        <div>
            <form onSubmit={handleAdd}>
                <input
                    name='name'
                    type='text'
                    placeholder='name of friend'
                    value={friend.name}
                    onChange={handleChanges}
                />
                <input
                    name='age'
                    type='text'
                    placeholder='age'
                    value={friend.age}
                    onChange={handleChanges}
                />
                <input
                    name='email'
                    type='text'
                    placeholder='email address'
                    value={friend.email}
                    onChange={handleChanges}
                />
                <button type='submit'>Add a Friend</button>
            </form>
        </div>
    )
}

export default AddFriend;