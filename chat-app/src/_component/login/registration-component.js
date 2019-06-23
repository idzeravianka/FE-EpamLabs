import React from 'react';
import { Redirect } from 'react-router-dom';
import './login-component.css';
import { connect } from 'react-redux';
import fakeAuth from '../../_services/authorization-service';
import * as firebase from 'firebase';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', nickName: '', redirectToReferrer: false };
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        let email = e.target.email.value;
        let password = e.target.password.value;

        await firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
            if (user) {
                user.user.updateProfile({
                    displayName: this.state.nickName,
                    photoURL: ''
                });
            }
            fakeAuth.authenticate(() => {
                this.setState(() => ({ redirectToReferrer: true }));
            });

            this.props.onSetUserName(this.state.nickName);
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
                <input className="login-component__login-input" id="nickName" type="text" value={this.state.nickName} onChange={this.handleChange} required />
                <input className="login-component__login-input" id="email" type="text" value={this.state.email} onChange={this.handleChange} required />
                <input className="login-component__password-input" id="password" type="password" value={this.state.password} onChange={this.handleChange} required />
                <button className="login-component__login-btn" onClick={this.login}>Login</button>
            </form>
        )
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onSetUserName: (username) => {
            dispatch({ type: 'SET_USERNAME', payload: username });
        }
    })
)(SignUp);