import NavBar from "../components/menu";
import { Typography, Badge, Card, Button, Tooltip } from "antd";
import ReactMarkdown from "react-markdown";
import containerLogo from "../styles/pictures/container-logo.png";
import { useParams } from "react-router-dom";
import { EditTwoTone } from '@ant-design/icons'
import { CustomTable } from "../components/table";
import dashboardBgImage from "../styles/pictures/dashboard-bg.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { Notify } from "../components/notify";

const { Title, Paragraph, Text, Link } = Typography;

export const ImageDetail = () => {
	let { username, imagename } = useParams();


	const [activeUser, setActiveUser] = useState({});
	const [imageDetail, setImageDetail] = useState([])
	const [isTableLoading, setIsTableLoading] = useState(false)
	const [showNotification, setShowNotification] = useState(false);
	const [notificationKind, setNotificationKind] = useState('info');
	const [notificationMsg, setNotificationMsg] = useState('');
	const [tag, setTag] = useState('');

	const [pagination, setPagination] = useState({
		pageSize: 5,
		current: 1,
	})

	let desc = `No description found`
	let markdownDetails = `# Nothing to see here :(`

	useEffect(() => {
		const token = jwtDecode(localStorage.getItem('token'))
		setActiveUser(token)

		setIsTableLoading(true)
		axios.get(`${process.env.REACT_APP_API_BASE_URL}/internal/metadata?namespace=${username}/${imagename}`)
			.then(resp => {
				if (resp.data && resp.data.Manifest && resp.data.Manifest.config) {
					const configList = resp.data.Manifest.config;

					setTag(configList[0].reference)
					configList.forEach(o => {
						if (o.reference === 'latest') {
							setTag('latest')
						}
					})
				}

				setImageDetail(resp.data)
				setIsTableLoading(false)
				setPagination({ ...pagination, total: resp.data.Manifest.config.length })
			}).catch(err => {
				setIsTableLoading(false)
				setNotificationKind('error')
				setNotificationMsg(err.message)
				setShowNotification(true)
				setShowNotification(false)
			})
	}, [])

	const onTableChange = (paginate, filters, sorters) => {
		setPagination(paginate)
	}

	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
			height: "100vh",
			overflowY: "scroll",
			paddingBottom: "10%",
			backgroundImage: `url(${dashboardBgImage})`,
			// backgroundColor: '#f4f3f6'
		}}>

			<Card style={{ width: "90%", marginTop: "2%" }}>
				<div style={{ flexDirection: "row", display: "flex", alignItems: "center" }}>
					<img src={containerLogo} style={{ height: 85, }} alt="container-image-logo" />
					<div style={{ marginLeft: "2%" }}>
						<Typography.Title level={2}>{username + "/" + imagename}</Typography.Title>
						<p>{desc}</p>
					</div>
				</div>

				<div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1%" }}>
					<Text strong copyable keyboard>{`docker pull openregistry.dev/${username}/${imagename}:${tag}`}</Text>
				</div>
			</Card>

			<Card style={{ width: "90%", margin: "2% 0" }}>
				<CustomTable onChange={onTableChange} data={imageDetail} loading={isTableLoading} pagination={pagination} />
			</Card>

			{
				showNotification ? Notify(notificationKind, notificationMsg) : null
			}
			<Card style={{ width: "90%", margin: "2% 0" }}>
				{
					activeUser.sub === username ?
						<div style={{ display: "flex", justifyContent: "flex-end", }}>
							<Tooltip placement="bottom" title={"coming soon"}>
								<Button disabled icon={<EditTwoTone />}>Edit</Button>
							</Tooltip>
						</div>
						: null
				}
				<div>
					<ReactMarkdown>
						{markdownDetails}
					</ReactMarkdown>
				</div>
			</Card>
		</div>
	)
}
