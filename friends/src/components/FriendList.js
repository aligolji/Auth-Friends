import React from 'react';
import axios from 'axios';

import Friend from './Friend';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class FriendList extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
        };
    };

    // componentDidMount() {
    //     this.getFriends();
    // }

    // getFriends = () => {
    //     axiosWithAuth()
    //         .get('/api/friends')
    //         .then(res => {
    //             console.log(res)
    //             // this.setState({
                    
    //             // })
    //         })
    //         .catch((err) => console.log(err));
    // };

    render() {
        return (
            <div>
                <h3>from FriendList</h3>
                <Friend />
            </div>
        )
    }
}


export default FriendList;

