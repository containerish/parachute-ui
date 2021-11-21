import {Card, Tooltip, Typography} from 'antd';
import { Link } from "react-router-dom";
import Text from "antd/es/typography/Text";

export const Tile = ({ repoName, author, updatedAt }) => {
	const dockerEndpoint = new URL(process.env.REACT_APP_API_BASE_URL)

	return (
		<div
			style={{ background: '#ccd7e3', width: "90%", borderRadius: 8, boxShadow: "0.7px 1.4px 1.4px hsl(0deg 0% 0% / 0.48)", margin: "0.5% 0" }}>
			<Card
				headStyle={{ background: 'rgba(204,215,227,0.61)', fontWeight: "bold" }}
				title={<Typography.Title level={4}>
					{author + "/" + repoName}
				</Typography.Title>}
				bordered={true}
				style={{ width: "100%", borderRadius: 8 }}
				extra={(
					<div>
						<Text style={{ marginRight: "12px" }} copyable={{
							text: `docker pull ${dockerEndpoint.hostname}/${author}/${repoName}`,
							tooltips: [<Tooltip>copy pull command</Tooltip>]
						}}
						/>
						<span />
						<Link style={{ fontWeight: "bold" }} to={`/details/${author}/${repoName}`}>More</Link>
					</div>
				)}
			>
				<Typography.Paragraph style={{fontWeight: "bold"}}>Author: {author}</Typography.Paragraph>
				<Typography.Text>Updated At: {updatedAt}</Typography.Text>
			</Card>
		</div>
	)
}

export const RenderTileList = ({ data = [] }) => {
	if (data && data.length > 0) {
		return data.map((item, i) => {
			if (item.Namespace !== "") {
				return <Tile
					repoName={item.Namespace.split('/')[1]}
					author={item.Namespace.split('/')[0]}
					updatedAt={new Date().toDateString()}
					key={i}
				/>
			}
		})
	} else {
		return <Typography.Title level={3}>Nothing to see here :(</Typography.Title>
	}
}
