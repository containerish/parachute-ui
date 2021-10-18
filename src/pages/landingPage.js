import React, { useState } from "react";
import ReactDOM from 'react-dom';
import '../styles/landingpage.css'
import parachute from "../styles/pictures/parachute.png"
import bg from "../styles/pictures/newbg.png"
import akashLogo from "../styles/pictures/akash.svg"
import skynetLogo from "../styles/pictures/skynetlogo.png"
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
import {Card} from "antd";
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


const styles = {
    wrapper: {
        height: "100vh",
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maxWidth: 1925,
        marginRight: "auto",
        marginLeft: "auto",
        display:"flex",
        justifyContent: "center"
    },
    child: {
        display: "flex",
        justifyContent: "flex-end"
    }
}
function LandingPage() {

    return (
        <Layout style={styles.wrapper}>
            <Content style={styles.child}>
                <div>
                    <SolidButton label={"Sign In"}/>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center', fontWeight: "bold" }}>Parachute by OpenRegistry - ©2021</Footer>
        </Layout>
    );
}

export default LandingPage;
