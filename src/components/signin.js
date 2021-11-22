import React, { useState } from "react";
import '../styles/landingpage.css'
import { Form, Input, Button, Typography, message, Alert } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useHistory, } from "react-router";
import axios from 'axios';

message.config({
	icon: null,
})

const SignIn = ({ handleSignUp, handleModalClose, }) => {
	const [showVerifyLoader, setShowVerifyLoader] = useState(false)
	const [emailVerified, setEmailVerified] = useState(false)
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showLoader, setShowLoader] = useState(false);
	const [showNotification, setShowNotification] = useState(false);
	const [signInError, setSignInError] = useState('');

	let loc = useHistory()

	const handleEmail = (input) => {
		setEmail(input)
	}

	const handlePassword = (input) => {
		setPassword(input)
	}

	const handleVerifyEmail = () => {
		setShowVerifyLoader(true)
		setTimeout(() => {
			// setEmailVerified(true)
			setShowVerifyLoader(false)
		}, 2000)
	}

	const notify = (kind, msg) => {
		setShowNotification(false)
		return message[kind]({
			content: <Alert
				message={msg}
				type={kind}
				closable={false}
				icon={null}
			/>,
			duration: 2,
		})
	}

	const handleUserSignin = () => {
		setShowLoader(true)
		const body = {
			email: email,
			password: password,
		}

		axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/signin`, body).then(res => {
			localStorage.setItem('token', res.data.token)
			localStorage.setItem('issued_at', res.data.issued_at)
			localStorage.setItem('expires_in', res.data.expires_in)
			setShowLoader(false)
			loc.push('/repositories')
		}).catch(err => {
			setShowLoader(false)
			setSignInError(err.message)
			setShowNotification(true)
		})
	}

	const [form] = Form.useForm();

	return (
		<div style={{ borderRadius: 12, }} >
			<Form
				layout="vertical"
				form={form}
				name={"sign-up"}
				labelCol={{ span: 8 }}
				style={{ borderRadius: 12, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 5%" }}
			>
				<Form.Item>
					<Typography.Title style={{ width: "100%", display: "flex", justifyContent: "center" }} level={2}>Sign in to OpenRegistry</Typography.Title>
				</Form.Item>
				<Form.Item
					style={{ fontWeight: "bold" }}
					label={"Email"}
					name={"email"}
					rules={[
						{
							required: true,
							message: "email cannot be empty",
						}
					]}>
					<Input
						type="email"
						value={email}
						onChange={(e) => handleEmail(e.target.value)}
						placeholder="email"
					/>
				</Form.Item>
				<Form.Item
					label={"Password"}
					name={"password"}
					style={{ fontWeight: "bold" }}
					rules={[
						{
							required: true,
							message: "invalid password",
						}
					]}>
					<Input.Password
						value={password}
						onChange={(e) => handlePassword(e.target.value)}
						placeholder="password"
					/>
				</Form.Item>
				<Form.Item {...tailLayout}>
					<Button
						onClick={handleUserSignin}
						icon={showLoader ? <LoadingOutlined /> : null}
						style={{ marginRight: "2%", borderRadius: 8, fontWeight: "bold" }} type={"primary"} htmlType={"submit"}>
						<Typography.Text style={{ fontWeight: "bold", color: "#fff" }}>
							Sign In
						</Typography.Text>
					</Button>
					<Button
						style={{ marginRight: "2%", borderRadius: 8 }}
						onClick={handleModalClose}
						htmlType={"button"}
					>
						<Typography.Text style={{ fontWeight: "bold" }}>
							Cancel
						</Typography.Text>
					</Button>
				</Form.Item>
				{showNotification ? notify('error', signInError) : null}
				{
					// <Form.Item {...tailLayout}>
					//     <Typography.Text>
					//         New Here? <a onClick={handleSignUp}>Sign Up</a>
					//     </Typography.Text>
					// </Form.Item>
				}
			</Form>
		</div >
	);
}

const tailLayout = {
	wrapperCol: {
		offset: 8,
		span: 16,
	}
}

export default SignIn;
