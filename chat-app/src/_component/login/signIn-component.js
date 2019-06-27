import React from 'react';
import { Redirect } from 'react-router-dom';
import './login-component.css';
import fakeAuth from '../../_services/authorization-service';
import * as firebase from 'firebase/app';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { redirectToReferrer: false };
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                fakeAuth.authenticate(() => {
                    this.setState(() => ({ redirectToReferrer: true }))
                });

                this.props.setUserName(user.displayName);
            }
        })
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let email = e.target.email.value;
        let password = e.target.password.value;

        firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
            this.props.setUserName(user.user.displayName);
            fakeAuth.authenticate(() => {
                this.setState(() => ({ redirectToReferrer: true }));
            })
        }).catch(() => alert('Check your data!'));
    }

    render() {
        const { from } = this.props.from || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state

        if (redirectToReferrer) {
            return <Redirect to={from} />
        }
        return (
            <form onSubmit={this.handleSubmit} className="login-component">
                <h3 className="login-component__title">Sign In</h3>
                <TextField id="email" label="Email" type="text" margin="normal" variant="outlined" value={this.state.email} onChange={this.handleChange} required />
                <TextField id="password" label="Password" type="password" margin="normal" variant="outlined" value={this.state.password} onChange={this.handleChange} required />
                <Button type="submit">Login</Button>
            </form>
        )
    }
}