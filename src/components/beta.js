import React, { useState } from "react";
import ReactDOM from 'react-dom';
import '../styles/landingpage.css'
import parachute from "../styles/pictures/parachute.png"
import {OutlinedButton, SolidButton, SolidButton2} from "./buttons";
import {TxtField} from "./inputfield"


function Beta({type, isError, errMsg, onClick, onChange}) {
    return (
        <form className="formStyle">
            <TxtField isError={isError} type={type} errMsg={errMsg} onChange={onChange} label="Email" variant="outlined" />
            <div style={{ width: '5%'}}/>
            <SolidButton2 disabled={isError} onClick={onClick} label= "Submit"/>
        </form>
    );
}

export default Beta;