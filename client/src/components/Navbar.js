import React, { Component } from 'react'
import Link from 'react-router-dom/Link'
// Material ui stuff
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
//import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
class Navbar extends Component {
    render() {
        return (
            <AppBar>
                
                <Toolbar className="nav-container">
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/login">Login</Button>
                    <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
                    <InputBase color="inherit">Find People</InputBase>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar
