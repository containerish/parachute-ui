import React from 'react';
import {Menu, Typography, Card} from 'antd';
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

class ExploreContainerImages extends React.Component {
    state = {
        repoData: [
            {repoName: "ubuntu", author: "guacamole", updatedAt: new Date().toDateString()},
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
        return (
            <Card style={styles.dashboard}>
                <div style={{ display: 'flex', alignItems: "center", flexDirection: "column"}}>
                    <Typography.Title level={3}>
                        Search for your or public container images
                    </Typography.Title>
                    <RenderTileList data={this.state.repoData}/>
                </div>
            </Card>
        );
    }
}

export default ExploreContainerImages;
// ReactDOM.render(<App />, mountNode);
