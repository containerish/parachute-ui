import React from 'react';
import { Menu } from 'antd';
import dashboardBg from "../styles/pictures/dashboard-bg.svg"
import Complete from "../components/autocomplete";
import {Tile, RenderTileList} from "../components/card";
import { UserOutlined} from '@ant-design/icons';
import NavBar from "../components/menu";
const { SubMenu } = Menu;

const styles = {
    dashboard: {
        backgroundImage:`url(${dashboardBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        overflowY: "scroll",
        paddingTop:"2%",
        paddingBottom: "10%",
    }
}

class PersonalDashboard extends React.Component {
    state = {
        current: 'mail',
        repoData: [
            {repoName: "ubuntu", author: "guacamole", updatedAt: new Date().toDateString()},
            {repoName: "debian", author: "guacamole", updatedAt: new Date().toDateString()},
            {repoName: "debian", author: "guacamole", updatedAt: new Date().toDateString()},
            {repoName: "debian", author: "guacamole", updatedAt: new Date().toDateString()},
            {repoName: "debian", author: "guacamole", updatedAt: new Date().toDateString()},
            {repoName: "debian", author: "guacamole", updatedAt: new Date().toDateString()},
            {repoName: "debian", author: "guacamole", updatedAt: new Date().toDateString()},
            {repoName: "debian", author: "guacamole", updatedAt: new Date().toDateString()},
            {repoName: "debian", author: "guacamole", updatedAt: new Date().toDateString()},
            {repoName: "debian", author: "guacamole", updatedAt: new Date().toDateString()},
            {repoName: "debian", author: "guacamole", updatedAt: new Date().toDateString()},
            {repoName: "debian", author: "guacamole", updatedAt: new Date().toDateString()},
            {repoName: "debian", author: "guacamole", updatedAt: new Date().toDateString()},
            {repoName: "debian", author: "guacamole", updatedAt: new Date().toDateString()},
            {repoName: "debian", author: "guacamole", updatedAt: new Date().toDateString()},
        ]
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <div style={styles.dashboard}>
                <div style={{ display: 'flex', alignItems: "center", flexDirection: "column"}}>
                       <RenderTileList data={this.state.repoData}/>
                </div>
            </div>
        );
    }
}

export default PersonalDashboard;
// ReactDOM.render(<App />, mountNode);
