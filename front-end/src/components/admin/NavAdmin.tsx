import React from 'react'
import { Menu, Button, Layout } from 'antd';
import { ShoppingCartOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';



type Props = {}

const NavAdmin = (props: Props) => {
	return (
		<div>
			<Layout>
				<Menu theme='dark' defaultSelectedKeys={['Dasboard']} mode='inline'>
					<Menu.Item key={'Dasboard'}>
						<NavLink className="nav-link active" aria-current="page" to="">Bảng điều khiển</NavLink>
					</Menu.Item>
					<Menu.Item key={'Product'} icon={<ShoppingCartOutlined />}>
						<NavLink className="nav-link" to='product'>Sản phẩm</NavLink>
					</Menu.Item>
					<Menu.Item key={'Category'} icon={<UnorderedListOutlined />}>
						<NavLink className="nav-link" to='category'>Danh mục</NavLink>
					</Menu.Item>
					<Menu.Item key={'Order'} icon={<ShoppingCartOutlined />}>
						<NavLink className="nav-link" to='order'>Đơn hàng</NavLink>
					</Menu.Item>
				</Menu>
			</Layout>
		</div>
	)
}

export default NavAdmin