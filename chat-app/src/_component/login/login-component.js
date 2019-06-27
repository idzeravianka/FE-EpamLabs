import React from 'react';
import { connect } from 'react-redux';
import './login-component.css';
import SignIn from './signIn-component';
import SignUp from './signUp-component';

class Login extends React.Component {
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