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
		dataSource={data && data.Manifest ? data.Manifest.config : []}
		onChange={onChange}
	>
		<Column title="Tag" dataIndex="reference" key="reference" />
		<Column title="Digest" dataIndex="digest" key="digest" render={(text, record, index) => {
			return <Typography.Text code>{text}</Typography.Text>
		}} />
		<Column title="Container Image Manifest" dataIndex="skynetLink" key="skynetLink" render={(text, record, index) => {
			return <Button type="link" onClick={() => window.open(`https://siasky.net/${text.replace('sia://', '')}`)}>Link</Button>
		}} />

	</Table>
}
