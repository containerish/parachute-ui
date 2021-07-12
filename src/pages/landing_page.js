import React, { useState } from "react";
import ReactDOM from 'react-dom';
import '../styles/landingpage.css'
import parachute from "../styles/pictures/parachute.png"
import {OutlinedButton, SolidButton} from "../components/buttons";
import SignUp from "../components/signup";
import SignIn from "../components/signin";
import {CustomModal} from "../components/modal";
import Beta from "../components/beta";
import axios from 'axios';
import Typography from "@material-ui/core/Typography";
import {Slide, Snackbar} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";


function LandingPage() {
    const [showSignUp, setShowSignUp] = useState(false)
    const [showSignIn, setShowSignIn] = useState(false)
    const [showBeta, setShowBeta] = useState(false)
    const [email,setEmail] = useState("")
    const [resp, setResp] = useState("")
    const [isError, setIsError] = useState(false)
    const [showNotification, setShowNotification] = useState(false)

    const handleSignIn = () => {
        setShowNotification(true)
        // setShowSignUp(false)
        // setShowSignIn(!showSignIn)
    }
    const handleSignUp = () => {
        setShowNotification(true)
        // setShowSignIn(false)
        // setShowSignUp(!showSignUp)
    }
    const handleBeta = () => {
        setShowBeta(!showBeta)
    }
    const handleSubmit = async () => {
        let body = {
            "email": email
        }

		axios.post('https://beta.openregistry.dev/beta/register', body)
           .then(response => {
               setResp(response.data.message)
               setIsError(false)
           }).catch(err => {
               setIsError(true)
               setResp(err.response.data.message)
       })
    }
    const handleEmail = async (e) => {
        await setEmail(e.target.value)
        validateEmail(e.target.value)
    }

    const validateEmail = (e) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(e).toLowerCase()) === false) {
            setIsError(true)
            setResp("email is invalid")
            return
        }

        setIsError(false)
        setResp("")
    }

    const handleNotificationClose = () => {
        setShowNotification(!showNotification)
    }

    return (
        <div className={"header"}>
            <div className="headdiv">
                <SolidButton label={"SignIn"} onClick={() => handleSignIn()}/>
                <SolidButton label={"SignUp"} onClick={() => handleSignUp()}/>
            </div>
            <div className="text">
                <img className="animated-logo" alt="parachute logo" src={parachute}/>
                <h1>Parachute by Open Registry</h1>
                <p>A decentralised container registry fully compliant with OCI Distribution Specification
                    which means now you can use all the features of existing container registries on OpenRegistry.
                    We are hosted on Akash and powered by SkyNet.
                    You see, Sky is the limit. Like literally!</p>
                <OutlinedButton onClick={() => handleBeta()} label="Register for Beta"/>
                {
                    showBeta ? <Beta isError={isError} type={"email"} errMsg={resp} onChange={handleEmail} onClick={() => handleSubmit()}/> :null
                }
            </div>
            {
                showSignUp ?
                    <CustomModal close={handleSignUp} show={showSignUp}>
                        <SignUp/>
                    </CustomModal>
                : null
            }
            {
                showSignIn ?
                <CustomModal close={handleSignIn} show={showSignIn}>
                    <SignIn/>
                </CustomModal>
                : null
            }
            <Snackbar
                style={{"paddingTop": "6.5%"}}
                open={showNotification}
                autoHideDuration={2000}
                onClose={handleNotificationClose}
                anchorOrigin={{"vertical":"top","horizontal":"right"}}
            >
                <MuiAlert
                    onClose={handleNotificationClose}
                    severity={"info"}
                    // elevation={1}
                    >
                    <AlertTitle> Coming Soon! </AlertTitle>
                </MuiAlert>
            </Snackbar>
            </div>
    );
}

export default LandingPage;
