import React from 'react';
import { withRouter } from "react-router-dom";
import fakeAuth from '../../_services/authorization-service';
import * as saveDataService from '../../_services/saveData-service';
import './nav-menu.css';

const NavMenu = withRouter(({ history }) => (

    fakeAuth.isAuthenticated === true 
    ?  <button className="sign-out-btn" onClick={() => {
            fakeAuth.signout(() => {
                saveDataService.removeItem("users"); 
                history.push('/');
            })
        }}>Sign Out</button>

    :   <></>
))

export default NavMenu;