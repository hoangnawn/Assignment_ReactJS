import { Breadcrumb, Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
    return (
        <div>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Dasboard</Breadcrumb.Item>
                </Breadcrumb>

                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}>
                    <div style={{ minHeight: 460, padding: 24 }}>
                        Content
                    </div>
                </Content>
            </Layout>

        </div>
    )
}

export default Dashboard