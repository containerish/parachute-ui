import {Button, Menu, Tooltip} from "antd";
import parachute from "../styles/pictures/parachute.png";

import Complete from "./autocomplete";
import { UserOutlined, ArrowUpOutlined } from "@ant-design/icons";
import React from "react";
import { useHistory } from "react-router";

const styles = {
	border: {
		fontWeight: "bold",
		border: 'none',
		color: "#fff"
	},
	autoComplete: {
		width: "35%",
		paddingBottom: "0.5%"
	},
	menuStyle: {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: "rgba(152,171,196,0.98)",
	},
	navButtonStyle: {
		color: "black",
		fontWeight: 600,
	},
	activeNavItemStyle: {
		color: "#fff",
		fontWeight: 600,
		backgroundColor: "#7c8fa9",
		borderRadius: 8
	},
}

const repositories = "/repositories"
const explore = "/explore"

const NavBar = () => {
	const loc = useHistory();

	const logOut = () => {
		localStorage.clear()
		loc.push('/')
	}

	const getActiveNavItemStyle = (who) => {
		switch (who) {
			case repositories:
				if (loc.location.pathname === who) {
					return styles.activeNavItemStyle
				}

				return styles.navButtonStyle
			case explore:
				if (loc.location.pathname === who) {
					return styles.activeNavItemStyle
				}

				return styles.navButtonStyle
			default:
				return styles.navButtonStyle
		}
	}

	const handleNavigation = (where) => {
		loc.push(where)
	}


	return <Menu style={styles.menuStyle} mode="horizontal">
		<Menu.Item style={styles.border} key="open-registry" icon={<img src={parachute} style={{ height: 50 }} alt={""} />}>
			<Button size="small" type="link" style={styles.navButtonStyle} onClick={() => handleNavigation(repositories)}>OpenRegistry</Button>
		</Menu.Item>
		<Menu.Item style={styles.autoComplete} key="Search">
			<Complete />
		</Menu.Item>
		<Menu.Item style={getActiveNavItemStyle(repositories)} key="Repositories">
			<Button size="small" type="link" onClick={() => handleNavigation(repositories)} style={getActiveNavItemStyle(repositories)}>Repositories</Button>
		</Menu.Item>
		<Menu.Item style={getActiveNavItemStyle(explore)} key="Explore">
			<Button size="small" type="link" onClick={() => handleNavigation(explore)} style={getActiveNavItemStyle(explore)}>Explore</Button>
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
