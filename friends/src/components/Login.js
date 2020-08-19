import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    // constructor() {
    //     super();
    state = {
        credentials: {
            username: '',
            password: '',
        }
    };

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    handleLogin = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/friendslist');
            })
            .catch((err) => console.log(err));
    };


    render() {
        return (
            <div>
                <form onSubmit={this.handleLogin}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChanges}
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChanges}
                    />
                    <button>Log In</button>
                </form>
            </div>
        );
    };
}

export default Login;