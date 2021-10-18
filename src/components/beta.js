import React, { useState } from "react";
import '../styles/landingpage.css'
import parachute from "../styles/pictures/parachute.png"
import {OutlinedButton, SolidButton, SolidButton2} from "./buttons";
import {TxtField} from "./inputfield"
import { CustomButton } from '../pages/landingPage'
import {Form, Input} from "antd";


function Beta({type, isError, errMsg, onClick, onChange}) {
    return (
        <Form className="formStyle">
            <Input isError={isError} type={type} errMsg={errMsg} onChange={onChange} label="Email" variant="outlined" />
            <div style={{ width: '5%'}}/>
            <CustomButton disabled={isError} onClick={() => onClick()} label="Submit"/>
        </Form>
    );
}

export default Beta;