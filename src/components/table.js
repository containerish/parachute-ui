import { Button, Table, Typography } from 'antd';
const { Column, } = Table;

export const CustomTable = (
	{ onChange, data = [], loading = false, pagination = { pageSize: 5, current: 1 } }
) => {

	return <Table
		title={() => <Typography.Title level={3}>Tags and additional info</Typography.Title>}
		loading={loading}
		pagination={pagination}
		bordered
		dataSource={data}
		onChange={onChange}
	>
		<Column title="Tag" dataIndex="reference" key="reference" />
		<Column title="Skylink (Skynet)" dataIndex="skynetLink" key="skynetLink" render={(text, record, index) => {
			return <Button type="link" onClick={() => window.open(`https://siasky.net/${text.replace('sia://', '')}`)}>Link</Button>
		}} />
		{/*<Column title="Pulled" dataIndex="pulled" key="digest"/>*/}
		{/*<Column title="Pushed" key="action" dataIndex="mediatype" />*/}
		<Column title="Size (in MBs)" key="size" dataIndex="size" />
	</Table>
}
