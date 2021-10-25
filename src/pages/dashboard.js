import React, { useState, useEffect } from 'react';
import dashboardBgImage from "../styles/pictures/dashboard-bg.svg"
import { RenderTileList } from "../components/card";
import axios from 'axios';
import jwtDecode from "jwt-decode";
import {Notify} from "../components/notify";

const styles = {
	dashboard: {
		backgroundImage: `url(${dashboardBgImage})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		height: "100vh",
		overflowY: "scroll",
		paddingTop: "2%",
		paddingBottom: "10%",
	},
	flexboxCenter: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	}
}

const PersonalDashboard = () => {
	const [repoData, setRepoData] = useState([]);
	const [showNotification, setShowNotification] = useState(false);
	const [notificationKind, setNotificationKind] = useState('info');
	const [notificationMsg, setNotificationMsg] = useState('');

	useEffect(() => {
		const token = jwtDecode(localStorage.getItem('token'))

		// token.sub (short for subject) is the username for the logged-in user
		axios.get(`${process.env.REACT_APP_API_BASE_URL}/internal/metadata?namespace=${token.sub}`).then(res => {
			if (typeof (res.data) === 'object') {
				if (res.data && res.data.Namespace && res.data.Namespace.length > 0) {
					setRepoData([res.data])
					return
				}
			}

			if (res.data) {
				const data = res.data.filter(el => el && el.Namespace && el.Namespace.length > 0)
				setRepoData(data)
			}

		}).catch(err => {
			// set it to empty, so that RenderList can display no data message
			// @TODO - maybe we can display an error warning
			setRepoData([])
			setNotificationKind('error')
			setNotificationMsg(err.message)
			setShowNotification(true)
			setShowNotification(false)
		})
	}, [])

	return (
		<div style={repoData.length === 0 ? {...styles.dashboard, ...styles.flexboxCenter} : styles.dashboard }>
			<div style={{ display: 'flex', alignItems: "center", flexDirection: "column", justifyContent: 'center' }}>
				<RenderTileList data={repoData}/>
			</div>
			{
				showNotification ? Notify(notificationKind, notificationMsg) : null
			}
		</div>
	);
}

export default PersonalDashboard;
