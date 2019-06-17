import React from 'react';
import { Redirect } from 'react-router-dom';
import './login-component.css';
import * as saveDataService from '../../_services/saveData-service';
import fakeAuth from '../../_services/authorization-service';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', redirectToReferrer: false };
        this.users = {username: 'admin', password: 'admin'};
        this.checkLoginFromLocalStorage();
    }

    usernameChange = (event) => {
        this.setState({ username: event.target.value });
    }

    passwordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    checkLoginFromLocalStorage = () => {
        const user = saveDataService.getUser();
        if (user && user.username === this.users.username && user.password === this.users.password){
            fakeAuth.authenticate(() => {
                this.setState(() => ({ redirectToReferrer: true }))
            })
        }
    }

    login = () => {
        if (this.state.username === this.users.username && this.state.password === this.users.password){
            fakeAuth.authenticate(() => {
                this.setState(() => ({ redirectToReferrer: true }))
                saveDataService.saveUser(this.users);
            })
        } else {
            alert("The username or password you entered is incorrect!")
        }
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state

        if (redirectToReferrer) {
            return <Redirect to={from} />
        }
        return (
            <div className="login-component">
                <h3 className="login-component__title">Sign In</h3>
                <input className="login-component__login-input" type="text" value={this.state.userName} onChange={this.usernameChange}/>
                <input className="login-component__password-input" type="password" value={this.state.password} onChange={this.passwordChange}/>
                <button className="login-component__login-btn" onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default Login;