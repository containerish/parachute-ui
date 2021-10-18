import React, { useState } from "react";
import '../styles/landingpage.css'
import bg from "../styles/pictures/newbg.png"
import akashLogo from "../styles/pictures/akash.svg"
import skynetLogo from "../styles/pictures/built-with-skynet.png"
import SignUp from "../components/signup";
import SignIn from "../components/signin";
import { CustomModal } from "../components/modal";
import Beta from "../components/beta";
import axios from 'axios';
import { Space, Typography, Layout, Button, Alert, message } from 'antd';
import { GithubOutlined, UserOutlined } from '@ant-design/icons';

const { Content, Footer } = Layout;

message.config({
	icon: null,
})

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
		display: "flex",
		justifyContent: "center"
	},
	child: {
		display: "flex",
		justifyContent: "flex-end"
	}
}
function LandingPage() {
	const [showSignUp, setShowSignUp] = useState(false)
	const [showSignIn, setShowSignIn] = useState(false)
	const [showBeta, setShowBeta] = useState(false)
	const [email, setEmail] = useState("")
	const [resp, setResp] = useState("")
	const [isError, setIsError] = useState(false)
	const [showNotification, setShowNotification] = useState(false)
	const [notificationKind, setNotificationKind] = useState('error');
	const [notificationMsg, setNotificationMsg] = useState('Email cannot be empty');

	const handleSignIn = () => {
		// setShowNotification(true)
		setShowSignUp(false)
		setShowSignIn(!showSignIn)
	}

	const handleSignUp = () => {
		// setShowNotification(true)
		setShowSignIn(false)
		setShowSignUp(!showSignUp)
	}
	const handleBeta = () => {
		setShowBeta(!showBeta)
	}
	const handleSubmit = async () => {
		if (email === '') {
			setShowNotification(true)
			return
		}

		let body = {
			"email": email
		}

		axios.post('https://beta.openregistry.dev/beta/register', body)
			.then(response => {
				setResp(response.data.message)
				setIsError(false)
				setNotificationMsg(response.data.message)
				setNotificationKind('info')
				setShowNotification(true)
			}).catch(err => {
				setIsError(true)
				setResp(err.response.data.message)
				// setState({showNotification: true, notificationKind: "error", notificationMsg: err.response.data.message})
				setNotificationKind('error')
				setNotificationMsg(err.response.data.message)
				setShowNotification(true)
			})
	}

	const handleEmail = (e) => {
		setEmail(e.target.value)
		validateEmail(e.target.value)
		if (e.target.value === '') {
			setIsError(false)
		}
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

	const notify = (kind = notificationKind, msg = notificationMsg) => {
		setShowNotification(false)
		return message[kind]({
			content: <Alert
				message={msg}
				type={kind}
				closable={false}
				icon={null}
			/>,
		})
	}

	return (
		<Layout style={styles.wrapper}>
			<Content style={styles.child}>
				<div style={{ margin: "1% 4%" }}>
					<Space>
						<CustomButton onClick={() => window.open('https://blog.openregistry.dev')} size="large" label={"Blog"} />
						<CustomButton icon={<GithubOutlined />} onClick={() => window.open('https://github.com/containerish/')} size="large" label={"Github"} />
						<CustomButton icon={<UserOutlined />} onClick={handleSignIn} size="large" label={"Sign In"} />
					</Space>
				</div>
				<div className="text">
					<Typography.Title level={2}>Parachute by Open Registry</Typography.Title>
					<Typography.Text style={{ color: "black", fontWeight: "bold" }}>A decentralised container registry fully compliant with OCI Distribution Specification
						which means now you can use all the features of existing container registries on OpenRegistry.
						We are hosted on Akash and powered by SkyNet.
						You see, Sky is the limit. Like literally!
					</Typography.Text>
					<br />
					<CustomButton onClick={handleBeta} kind="outlined" label="Register for Beta" />
					{
						showBeta ? <Beta isError={isError} type={"email"} errMsg={resp} onChange={handleEmail} onClick={handleSubmit} /> : null
					}
					<div style={{ display: "flex", justifyContent: "center", width: "100%", alignItems: "center" }}>
						<img style={{ "width": 200 }} src={akashLogo} alt={""} />
						<img style={{ "width": 200 }} src={skynetLogo} alt={""} />
					</div>
				</div>
				{
					showSignUp ?
						<CustomModal close={handleSignUp} show={showSignUp}>
							<SignUp handleSignIn={handleSignIn} handleModalClose={handleSignUp} />
						</CustomModal>
						: null
				}
				{
					showSignIn ?
						<CustomModal close={handleSignIn} show={showSignIn}>
							<SignIn handleModalClose={handleSignIn} handleSignUp={handleSignUp} />
						</CustomModal>
						: null
				}
			</Content>
			<Footer style={{ textAlign: 'center', fontWeight: "bold" }}>Parachute by OpenRegistry - ©2021</Footer>

			{showNotification ? notify() : null}

		</Layout>
	);
}

export const CustomButton = (
	{ kind = "solid", label = 'Submit', size = "large", disabled = false, onClick = () => alert("button clicked"), icon = null }
) => {
	switch (kind) {
		case "solid":
			return <Button icon={icon} onClick={onClick} disabled={disabled} size={size} type="primary">{label}</Button>
		case "outlined":
			return <Button icon={icon} onClick={onClick} disabled={disabled} style={{ borderRadius: 10, "&:hover": { backgroundColor: "pink" } }} size={size} type="primary">{label}</Button>
		default:
			return <Button onClick={onClick} disabled={disabled} style={{ width: "100%" }} size={size} type="primary">{label}</Button>
	}
}

export default LandingPage;
