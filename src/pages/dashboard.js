import React, { useState } from "react";
import ReactDOM from 'react-dom';
import parachute from "../styles/pictures/parachute.png"
import mglass from "../styles/pictures/mglass.png"
import {TextFieldWithLogo, TxtField} from "../components/inputfield"
import '../styles/dashboard.css'
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import {InputBase, NativeSelect} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import {SolidButton2} from "../components/buttons";


const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: '8px',
        backgroundColor: '#677C95FF',
        '&:hover': {
            backgroundColor: '#152036FF',
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '35%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            // width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    formControl: {
        margin: theme.spacing(5),
        minWidth: 120,
        backgroundColor: "white",
        borderRadius: 8,
        color: "black",

    },
}));

function Dashboard() {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };


    return (
        <div className={"bg"}>
            <div className="navbar">
                <AppBar position="static">
                    <Toolbar className="navbar">
                        <div className="flex" style={{flex: 1}}>
                            <img className="logo" src={parachute} alt="parachute-logo" />
                            <Typography className="label" variant="h5"> Parachute <br/> <label className="underlabel"> by open registry </label> </Typography>
                        </div>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search (e.g alpine)"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <div className="flex" style={{flex:2}}>
                            <text className="nav-links">Repositories</text>
                            <text className="nav-links">Explore</text>
                            <text className="nav-links">Help</text>
                            <MenuItem onClick={handleProfileMenuOpen}>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="primary-search-account-menu"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <p>Profile</p>
                            </MenuItem>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>

            <div className= "mid">
                <input className="input" style={{flex: "1"}} placeholder="username"/>
                <input className="input" style={{flex: "5"}} placeholder="lookup your repositories"/>
                <SolidButton2 label= "Create Repo"/>
            </div>
        </div>
    );
}

export default Dashboard;
