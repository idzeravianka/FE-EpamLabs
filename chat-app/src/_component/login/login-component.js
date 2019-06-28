import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import SignIn from './signIn-component';
import SignUp from './signUp-component';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

function Login(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function setUserName(username) {
        if (username) {
            props.onSetUserName(username);
        }
    }

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    scrollButtons="auto"
                >
                    <Tab label="LogIn" />
                    <Tab label="Registration" />
                </Tabs>
            </AppBar>
            {value === 0 &&
                <TabContainer>
                    <SignIn setUserName={setUserName} from={props.location.state}></SignIn>
                </TabContainer>
            }
            {value === 1 &&
                <TabContainer>
                    <SignUp setUserName={setUserName} from={props.location.state}></SignUp>
                </TabContainer>
            }
        </div>
    );
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