import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

export default class Header extends React.Component {
    render() {
        if (this.props.auth) {
            return (
                <AppBar position="sticky">
                    <Button onClick={this.props.signOut}>Sign Out</Button>
                </AppBar>
            )
        }
    }
}