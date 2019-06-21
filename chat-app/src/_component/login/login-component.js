import React from 'react';
import { Redirect } from 'react-router-dom';
import './login-component.css';
import * as saveDataService from '../../_services/saveData-service';
import fakeAuth from '../../_services/authorization-service';
import * as firebase from 'firebase';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', redirectToReferrer: false };
        this.checkLoginFromLocalStorage();
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    checkLoginFromLocalStorage = () => {
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        let email = e.target.email.value;
        let password = e.target.password.value;

        await firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            fakeAuth.authenticate(() => {
            this.setState(() => ({ redirectToReferrer: true }));
            saveDataService.saveUser(this.state);
        })}).catch(() => alert('Check your data!'));
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
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

export default Login;