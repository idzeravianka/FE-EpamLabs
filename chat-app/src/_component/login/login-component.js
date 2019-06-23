import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './login-component.css';
import fakeAuth from '../../_services/authorization-service';
import * as firebase from 'firebase';
import SignIn from './signIn-component';
import SignUp from './registration-component';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', redirectToReferrer: false };
        firebase.auth().onAuthStateChanged((user) => {
            if (user){
                fakeAuth.authenticate(() => {
                this.setState(() => ({ redirectToReferrer: true }))});
                this.props.onSetUserName(user.displayName); // эта штука ломает регистрацию, посмотреть
            }
        })
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state

        if (redirectToReferrer) {
            return <Redirect to={from} />
        }
    return(
        <>
            <SignIn from={this.props.location.state}></SignIn>
            <SignUp from={this.props.location.state}></SignUp>
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
            dispatch({type: 'SET_USERNAME', payload: username});
        }
    })
  )(Login);