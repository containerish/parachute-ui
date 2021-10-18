import React, { useState } from "react";
import '../styles/landingpage.css'
import { OutlinedButton, SolidButton, SolidButton2 } from "./buttons";
import { TxtField } from "./inputfield"
import { Form, Input, Button, Typography, Spin } from 'antd';
import { LoadingOutlined, CheckCircleTwoTone, CloseCircleOutlined } from '@ant-design/icons';
import { useHistory, useLocation } from "react-router";

const SignIn = ({ handleSignUp, handleModalClose }) => {
	const [showVerifyLoader, setShowVerifyLoader] = useState(false)
	const [emailVerified, setEmailVerified] = useState(false)

	let loc = useHistory()
	const SignIn = () => {
		setTimeout(() => {
			loc.push("/repositories")
		}, 2000)
	}

	const handleCancel = () => {

	}
	const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


	const handleVerifyEmail = () => {
		setShowVerifyLoader(true)
		setTimeout(() => {
			// setEmailVerified(true)
			setShowVerifyLoader(false)
		}, 2000)
	}

	const showEmailVerification = () => {
		if (!showVerifyLoader) {
			return <Button onClick={handleVerifyEmail} >Verify</Button>
		} else if (emailVerified) {
			return <CheckCircleTwoTone twoToneColor="#52c41a" />
		} else {
			return <CloseCircleOutlined twoToneColor="red" />
		}
	}
	const [form] = Form.useForm();

	return (
		<div
			style={{ borderRadius: 12, }}
		>
			<Form
				layout="vertical"
				form={form}
				name={"sign-up"}
				labelCol={{ span: 8 }}
				style={{ borderRadius: 12, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 5%" }}
			>
				<Form.Item>
					<Typography.Title style={{ width: "100%", display: "flex", justifyContent: "center" }} level={2}>Sign up for OpenRegistry</Typography.Title>
				</Form.Item>
				<Form.Item
					style={{ fontWeight: "bold" }}
					label={"Email/Username"}
					name={"email"}
					rules={[
						{
							required: true,
							message: "email cannot be empty",
						}
					]}>
					<Input type="email" placeholder="email" />
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
					<Input.Password placeholder="password" />
				</Form.Item>
				<Form.Item {...tailLayout}>
					<Button
						onClick={() => handleSignUp()}
						style={{ marginRight: "2%", borderRadius: 8, fontWeight: "bold" }} type={"primary"} htmlType={"submit"}>
						Sign In
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
