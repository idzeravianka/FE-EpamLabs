import React from 'react';
import * as firebase from 'firebase/app';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { signIn__email: '', signIn__password: '' };
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let email = e.target.signIn__email.value;
        let password = e.target.signIn__password.value;

        firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
            console.log(response.user.displayName);
            this.props.setUserName(response.user.displayName);
        }).catch(() => alert('Check your data!'));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Grid 
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <h3>Login</h3>
                    <TextField 
                        id="signIn__email" 
                        label="Email" 
                        type="text" 
                        margin="normal" 
                        variant="outlined" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        required 
                    />
                    <TextField 
                        id="signIn__password" 
                        label="Password" 
                        type="password" 
                        margin="normal" 
                        variant="outlined" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        required 
                    />
                    <Button type="submit">Login</Button>
                </Grid>
            </form>
        )
    }
}