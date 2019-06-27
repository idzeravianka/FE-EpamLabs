import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './login-component.css';
import SignIn from './signIn-component';
import SignUp from './registration-component';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    setUserName = (username) => {
        if (username){
            this.props.onSetUserName(username);
        }
    }

    render() {
        return (
            <>
                <SignIn setUserName={this.setUserName} from={this.props.location.state}></SignIn>
                <SignUp setUserName={this.setUserName} from={this.props.location.state}></SignUp>
            </>
        );
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onSetUserName: (username) => {
            dispatch({ type: 'SET_USERNAME', payload: username });
            console.log(username);
        }
    })
)(Login);