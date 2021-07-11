import React, { useState } from "react";
import ReactDOM from 'react-dom';
import '../styles/landingpage.css'
import parachute from "../styles/pictures/parachute.png"
import {OutlinedButton, SolidButton, SolidButton2} from "./buttons";
import {TxtField} from "./inputfield"

function SignUp() {
    return (
        <div className="container">
            <div className="card">
                <div className="inner-box" id="card">
                    <div className="sign-up">
                        <div className="winHead">
                            <img className="logo-sm" alt="logo" src={parachute}/>
                            <h1>SignUp</h1>
                        </div>
                        <form className="formStyle">
                           <TxtField label="Email"/>
                            <TxtField label="Username"/>
                            <TxtField label="Password"/>
                            <div className="bottom"> &nbsp;
                                <SolidButton2 label= "Submit"/>
                                <label>already have an account?
                                    <a style={{cursor: "pointer"}}>SignIn</a>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
