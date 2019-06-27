import React from 'react';
import './login-component.css';
import * as firebase from 'firebase/app';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { signUp__email: '', signUp__password: '', signUp__nickName: '' };
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let email = e.target.signUp__email.value;
        let password = e.target.signUp__password.value;

        firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
            if (user) {
                user.user.updateProfile({
                    displayName: this.state.signUp__nickName,
                    photoURL: ''
                });
            }
            this.props.setUserName(this.state.signUp__nickName);
        }).catch(() => alert('Check your data!'));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="login-component" >
                <h3 className="signUp-component__title">Fitst Time? SignUp Now!</h3>
                <TextField 
                    id="signUp__nickName" 
                    label="NickName" 
                    type="text" 
                    margin="normal" 
                    variant="outlined" 
                    value={this.state.nickName} 
                    onChange={this.handleChange} 
                    required 
                />
                <TextField 
                    id="signUp__email" 
                    label="Email" 
                    type="text" 
                    margin="normal" 
                    variant="outlined" 
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    required 
                />
                <TextField 
                    id="signUp__password" 
                    label="Password" 
                    type="password" 
                    margin="normal" 
                    variant="outlined" 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    required 
                />
                <Button type="submit" onClick={this.login}>Sign Up</Button>
            </form>
        )
    }
}