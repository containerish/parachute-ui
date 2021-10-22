import { Button, Menu } from "antd";
import parachute from "../styles/pictures/parachute.png";

import Complete from "./autocomplete";
import { UserOutlined, ArrowUpOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const styles = {
	border: {
		borderBottomColor: "red",
		fontWeight: "bold",
		border: 'none'
	},
	autoComplete: {
		width: "35%",
		paddingBottom: "0.5%"
	},
	menuStyle: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "rgba(152,171,196,0.98)",
	},
	navButtonStyle: {
		color: "black",
		fontWeight: 600,
	}
}

const NavBar = () => {
	const loc = useHistory();

	const logOut = () => {
		localStorage.clear()
		loc.push('/')
	}


	return <Menu style={styles.menuStyle} mode="horizontal">
		<Menu.Item style={styles.border} key="openregistry" icon={<img src={parachute} style={{ height: 50 }} alt={""} />}>
			<Button size="small" type="link" style={styles.navButtonStyle} onClick={() => loc.push('/repositories')}>OpenRegistry</Button>
		</Menu.Item>
		<Menu.Item style={styles.autoComplete} key="Search">
			<Complete />
		</Menu.Item>
		<Menu.Item style={styles.border} key="Repositories">
			<Button size="small" type="link" onClick={() => loc.push('/repositories')} style={styles.navButtonStyle}>Repositories</Button>
		</Menu.Item>
		<Menu.Item style={styles.border} key="Explore">
			<Button size="small" type="link" onClick={() => loc.push('/explore')} style={styles.navButtonStyle}>Explore</Button>
		</Menu.Item>
		<Menu.Item style={styles.border} key="Help">
			<Button
				size="small"
				icon={<ArrowUpOutlined style={{ transform: "rotate(45deg)" }} />}
				type="link"
				onClick={() => window.open("https://blog.openregistry.dev")}
				style={styles.navButtonStyle}
			>
				Blog
			</Button>
		</Menu.Item>
		<Menu.Item style={styles.border} key="log-out">
			<Button size="small" icon={<UserOutlined />} type="link" onClick={logOut} style={styles.navButtonStyle}>Log Out</Button>
		</Menu.Item>
	</Menu>

}

export default NavBar;
