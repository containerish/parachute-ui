import React, { useEffect, useState } from 'react';
import { Typography, Card } from 'antd';
import dashboardBgImage from "../styles/pictures/dashboard-bg.svg"
import { RenderTileList } from "../components/card";
import jwtDecode from "jwt-decode";
import axios from "axios";

const styles = {
    dashboard: {
        backgroundImage:`url(${dashboardBgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        overflowY: "scroll",
        paddingTop:"2%",
        paddingBottom: "10%",
    },
    flexboxCenter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inner: {
        display: 'flex',
        alignItems: "center",
        flexDirection: "column",
    }
}

const ExploreContainerImages = () => {
    const [repoData, setRepoData] = useState([]);

    useEffect(() => {
        const token = jwtDecode(localStorage.getItem('token'))
        // token.sub is the username
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/internal/metadata?namespace=${token.sub}`).then(res => {
            if (typeof res.data === 'object') {
                if (res.data && res.data.Namespace && res.data.Namespace.length > 0) {
                    setRepoData([res.data])
                    return
                }
            }

            if (res.data) {
                const data = res.data.filter(el => el && el.Namespace && el.Namespace.length > 0)
                setRepoData(data)
            }

        }).catch(_ => {
            // set it to empty, so that RenderList can display no data message
            // @TODO - maybe we can display an error warning
            setRepoData([])
        })
    }, [])

    return (
        <Card style={repoData.length === 0 ? {...styles.dashboard, ...styles.flexboxCenter} : styles.dashboard}>
            <div style={styles.inner}>
                <Typography.Title level={3}>
                    Search for your or public container images
                </Typography.Title>
                <RenderTileList data={repoData}/>
            </div>
        </Card>
    );
}

export default ExploreContainerImages;
