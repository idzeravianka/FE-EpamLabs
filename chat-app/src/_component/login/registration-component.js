import React from 'react';
import { Redirect } from 'react-router-dom';
import './login-component.css';
import fakeAuth from '../../_services/authorization-service';
import * as firebase from 'firebase/app';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', nickName: '', redirectToReferrer: false };
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let email = e.target.email.value;
        let password = e.target.password.value;

        firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
            if (user) {
                user.user.updateProfile({
                    displayName: this.state.nickName,
                    photoURL: ''
                });
            }
            fakeAuth.authenticate(() => {
                this.setState(() => ({ redirectToReferrer: true }));
            });
            this.props.setUserName(this.state.nickName);
        }).catch(() => alert('Check your data!'));
    }

    render() {
        const { from } = this.props.from || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state

        if (redirectToReferrer) {
            return <Redirect to={from} />
        }
        return (
            <form onSubmit={this.handleSubmit} className="login-component" >
                <h3 className="login-component__title">Fitst Time? SignUp Now!</h3>
                <TextField id="nickName" label="NickName" type="text" margin="normal" variant="outlined" value={this.state.nickName} onChange={this.handleChange} required />
                <TextField id="email" label="Email" type="text" margin="normal" variant="outlined" value={this.state.email} onChange={this.handleChange} required />
                <TextField id="password" label="Password" type="password" margin="normal" variant="outlined" value={this.state.password} onChange={this.handleChange} required />
                <Button type="submit" onClick={this.login}>Login</Button>
            </form>
        )
    }
}