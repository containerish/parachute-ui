import React, { useState } from "react";
import ReactDOM from 'react-dom';
import '../styles/landingpage.css'
import parachute from "../styles/pictures/parachute.png"
import {OutlinedButton, SolidButton, SolidButton2} from "../components/buttons";
import {TxtField} from "./inputfield"
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function SignIn() {
    return (
        <div className="container">
            <div className="card">
                <div className="inner-box" id="card">
                    <div className="sign-in">
                        <div className="winHead">
                            <img className="logo-sm" alt="logo" src={parachute}/>
                            <h1>SignIn</h1>
                        </div>
                        <form className="formStyle">
                            <TxtField label="Username" variant="outlined" />
                            <TxtField type="password" label="Password" variant="outlined" />
                            <div className="bottom"> &nbsp;
                                <SolidButton2 label= "Submit"/>
                                    <Typography>
                                        <label>New here?</label>
                                    <Link href="#" variant="body2">
                                        {'SignUP'}
                                    </Link>
                                    </Typography>
                            </div>
                        </form>
                        <a href="">Forgot Password</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
