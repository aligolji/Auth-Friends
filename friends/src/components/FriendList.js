import React from 'react';

import Friend from './Friend';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class FriendList extends React.Component {
    // constructor() {
    //     super();
        state = {
            friends: []
        };
    // };

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then((res) => {
                console.log(res)
                this.setState({
                    friends: res.data
                })
            })
            .catch((err) => console.log(err));
    };

    render() {
        return (
            <div>
                <h3>from FriendList</h3>
                {this.state.friends.map((friend) => {
                    return <Friend friend={friend} key={friend.id} />;
                })}
            </div>
        )
    }
}


export default FriendList;

