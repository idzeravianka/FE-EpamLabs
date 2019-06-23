import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './login-component.css';
import fakeAuth from '../../_services/authorization-service';
import * as firebase from 'firebase';

class SignIn extends React.Component {
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

        await firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
            console.log(user.user.displayName);
            fakeAuth.authenticate(() => {
            this.setState(() => ({ redirectToReferrer: true }));
            this.props.onSetUserName(user.user.displayName);
        })}).catch(() => alert('Check your data!'));
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
                <input className="login-component__login-input" id="email" type="text" value={this.state.email} onChange={this.handleChange}/>
                <input className="login-component__password-input" id="password" type="password" value={this.state.password} onChange={this.handleChange}/>
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
            dispatch({type: 'SET_USERNAME', payload: username});
        }
    })
  )(SignIn);