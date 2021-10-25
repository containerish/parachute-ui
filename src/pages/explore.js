import React, { useEffect, useState } from 'react';
import { Typography, Card } from 'antd';
import dashboardBgImage from "../styles/pictures/dashboard-bg.svg"
import { RenderTileList } from "../components/card";
import axios from "axios";
import {Notify} from "../components/notify";

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
    const [showNotification, setShowNotification] = useState(false);
    const [notificationKind, setNotificationKind] = useState('info');
    const [notificationMsg, setNotificationMsg] = useState('');

    useEffect( async () => {
        let repos =  await fetchAllRepositories()
        setRepoData(repos)
    }, [])

    const fetchAllRepositories = async () => {
        try {
            const resp = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/internal/metadata`)
            if (typeof resp.data === 'object') {
                if (resp.data && resp.data.Namespace && resp.data.Namespace.length > 0) {
                    return [resp.data]
                }
            }

            if (resp.data) {
                return resp.data.filter(el => el && el.Namespace && el.Namespace.length > 0)
            }

            return []
        } catch (err) {
            setNotificationKind('error')
            setNotificationMsg(err.message)
            setShowNotification(true)
            setShowNotification(false)
            return []
        }
    }

    return (
        <Card style={repoData.length === 0 ? {...styles.dashboard, ...styles.flexboxCenter} : styles.dashboard}>
            {
                showNotification ? Notify(notificationKind, notificationMsg) : null
            }
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
