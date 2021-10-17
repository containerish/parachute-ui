import React, { useState } from "react";
import ReactDOM from 'react-dom';
import '../styles/landingpage.css'
import parachute from "../styles/pictures/parachute.png"
import {OutlinedButton, SolidButton, SolidButton2} from "./buttons";
import {TxtField} from "./inputfield"
import {Form, Input, Button, Typography, Spin} from 'antd';
import {LoadingOutlined, CheckCircleTwoTone, CloseCircleOutlined } from '@ant-design/icons';
import {useHistory, useLocation} from "react-router";

const SignUp = ({handleSignIn, handleModalClose}) => {
    let loc = useHistory()
    const handleSignUp = () => {
        setTimeout(() => {
            loc.push("/repositories")
        }, 2000)
    }

    const handleCancel = () => {

    }
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    const [showVerifyLoader, setShowVerifyLoader] = useState(false)
    const [emailVerified, setEmailVerified] = useState(false)

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
            return <CheckCircleTwoTone twoToneColor="#52c41a"/>
        } else {
            return <CloseCircleOutlined twoToneColor="red"/>
        }
    }
    const [form] = Form.useForm();

    return (
        <div
            style={{borderRadius: 12,}}
        >
            <Form
                layout="vertical"
                form={form}
                name={"sign-up"}
                labelCol={{ span:8 }}
                style={{borderRadius: 12, display:"flex", flexDirection:"column", justifyContent: "center", padding: "0 5%"}}
            >
                <Form.Item>
                    <Typography.Title style={{width:"100%", display:"flex", justifyContent:"center"}} level={2}>Sign up for OpenRegistry</Typography.Title>
                </Form.Item>
                <Form.Item
                    label={"Email"}
                    style={{fontWeight: "bold"}}
                    name={"email"}
                    rules={[
                        {
                            required: true,
                            message: "email cannot be empty",
                        }
                    ]}>
                    <Input.Search
                        type="email"
                        placeholder="email"
                        loading={showVerifyLoader}
                        enterButton="Verify"
                        onSearch={handleVerifyEmail}
                        style={{borderRadius: "12 !important", fontWeight: "bold"}}
                    />
                </Form.Item>
                <Form.Item
                    label={"Username"}
                    name={"username"}
                    style={{fontWeight: "bold"}}
                    rules={[
                        {
                            required: true,
                            message: "username already exists",
                        }
                    ]}>
                    <Input placeholder="a cool username" />
                </Form.Item>
                <Form.Item
                    label={"Password"}
                    name={"password"}
                    style={{fontWeight: "bold"}}
                    rules={[
                        {
                            required: true,
                            message: "invalid password",
                        }
                    ]}>
                    <Input.Password placeholder="choose a strong password" />
                </Form.Item>
                <Form.Item
                    label={"Confirm Password"}
                    name={"confirm-password"}
                    style={{fontWeight: "bold"}}
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                            message: "invalid password",
                        }
                    ]}>
                    <Input.Password placeholder="confirm password" />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button
                        onClick={() => handleSignUp()}
                        style={{marginRight:"2%", borderRadius: 8, fontWeight: "bold"}} type={"primary"} htmlType={"submit"}>Sign Up</Button>
                    <Button
                        style={{marginRight:"2%", borderRadius: 8, fontWeight: "bold"}}
                        onClick={handleModalClose}
                        htmlType={"button"}
                    >
                        Cancel
                    </Button>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Typography.Text>
                        Already a user? <a onClick={handleSignIn}>Sign In</a>
                    </Typography.Text>
                </Form.Item>
            </Form>
        </div>
    );
}

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    }
}

export default SignUp;
