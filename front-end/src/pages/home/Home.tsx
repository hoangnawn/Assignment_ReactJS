import React from 'react'
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

type Props = {}

const Home = (props: Props) => {
    const listData = [];
    for (let i = 0; i < 23; i++) {
        listData.push({
            href: 'https://ant.design',
            title: `ant design part ${i}`,
            avatar: 'https://joeschmoe.io/api/v1/random',
            description:
                'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content:
                'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        });
    }
    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );
    return (
        <div>

            <section className="section-name padding-y-sm">
                <div className="container">
                    <header className="section-heading">
                        <a href="#" className="btn btn-outline-primary float-right">See all</a>
                        <h3 className="section-title">Popular products</h3>
                    </header>

                    <List
                        grid={{ gutter: 16, column: 4 }}
                        size="large"
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 8,
                        }}
                        dataSource={listData}
                        
                        renderItem={item => (
                            <List.Item
                                key={item.title}
                                extra={
                                    <img
                                        width={272}
                                        alt="logo"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                    />
                                }
                            >
                                <List.Item.Meta
                                    title={<a href={item.href}>{item.title}</a>}
                                />
                                {item.content}
                            </List.Item>
                        )}
                    />,
                </div>
            </section>




        </div>
    )
}

export default Home