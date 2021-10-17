import {Menu} from "antd";
import parachute from "../styles/pictures/parachute.png";

import Complete from "./autocomplete";
import {UserOutlined, ArrowUpOutlined } from "@ant-design/icons";
import React from "react";
import {Link} from "react-router-dom";

const styles = {
    border: {
        borderBottomColor: "red",
        fontWeight: "bold",
        "&:hover": {
            backgroundColor: "#fff !important",
            borderColor: "#fff !important",
            color: "pink",
        },
        "border": 'none'
    },
    autoComplete: {
        width: "40%",
        paddingBottom: "0.5%"
    },
    menuStyle: {
        display:"flex",
        justifyContent:"space-between",
        alignItems: "center",
        backgroundColor: "rgba(152,171,196,0.98)",
        "&:hover": {
            color: "pink"
        }
    }

}

const NavBar = () => {
    return <Menu style={styles.menuStyle} mode="horizontal">
        <Menu.Item style={styles.border} key="openregistry" icon={<img src={parachute} style={{height:50}} alt={""}/>}>
            <Link to="/repositories">OpenRegistry</Link>
        </Menu.Item>
        <Menu.Item style={styles.autoComplete} key="Search">
            <Complete/>
        </Menu.Item>
        <Menu.Item style={styles.border} key="Repositories">
            <Link to="/repositories">Repositories</Link>
        </Menu.Item>
        <Menu.Item style={styles.border} key="Explore">
            <Link to="/explore">Explore</Link>
        </Menu.Item>
        <Menu.Item style={styles.border} key="Help" icon={<ArrowUpOutlined style={{ transform: "rotate(45deg)" }} />}>
            <a target="_blank" href={"https://blog.openregistry.dev"}>Blog</a>
        </Menu.Item>
        <Menu.Item style={styles.border} key="log-out" icon={<UserOutlined/>}>
            <Link to="/">Log Out</Link>
        </Menu.Item>

    </Menu>

}

export default NavBar;
