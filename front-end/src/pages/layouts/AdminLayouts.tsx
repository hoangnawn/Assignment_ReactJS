import React from 'react'
import { Layout } from 'antd';
import HeaderAdmin from '../../components/admin/HeaderAdmin';
import NavAdmin from '../../components/admin/NavAdmin';
import { Outlet } from 'react-router-dom';


type Props = {}

const { Header, Footer, Sider, Content } = Layout;

const AdminLayouts = (props: Props) => {
    return (
        <>
            <Layout>
                <Header style={{padding:15}}><HeaderAdmin /></Header>
                <Layout>
                    <Sider><NavAdmin /></Sider>
                    <Layout>
                        <Content><Outlet /></Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>

            </Layout>
            
        </>
    )
}

export default AdminLayouts