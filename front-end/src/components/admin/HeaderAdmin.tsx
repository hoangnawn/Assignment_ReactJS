import React from 'react'
import { Typography } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

type Props = {}

const HeaderAdmin = (props: Props) => {
	return (
		<div>
			<Avatar style={{ float: 'right' }} icon={<UserOutlined />} />
			<Title style={{ color: 'white' }} level={3}>Admin</Title>
		</div>
	)
}

export default HeaderAdmin