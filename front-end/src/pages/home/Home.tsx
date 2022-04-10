import React, { useEffect, useState } from 'react'
import { List, Avatar, Space, Card, Image } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import Title from 'antd/lib/skeleton/Title';
import { list } from '../../api/product';
import { listcate } from '../../api/category';
import { ProductType } from '../types/product';
import { Money } from '../../utils/home';
import { CateType } from '../types/category';
import { Link } from 'react-router-dom';

type Props = {}

const Home = (props: Props) => {
    const [products, setProducts] = useState<ProductType[]>();

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await list();
            setProducts(data);
        }
        getProducts();
    }, [])
    const [cates, setCates] = useState<CateType[]>();

    useEffect(() => {
        const getCates = async () => {
            const { data } = await listcate();
            setCates(data);
        }
        getCates();
    }, [])
    const listData = products?.map((item,index)=>{
        return {
            key: index+1,
            id: item._id,
            name: item.name,
            price: item.price,
            image: item.image
        }
    })
    return (
        <div>
            <section className="section-main bg padding-y">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-3">
                            <nav className="card">
                                <ul className="menu-category">
                                    {cates?.map((item,index)=>(
                                        <li key={index}>
                                            <Link to={`/${item._id}`}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </aside>
                        <div className="col-md-9">
                            <article className="banner-wrap">
                                <img src="https://i.pinimg.com/originals/ca/e7/2c/cae72ce86998abcadd5051acd91a696b.jpg" className="w-100 rounded" />
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-name padding-y-sm">
                <div className="container">
                    <header className="section-heading">
                        <a href="#" className="btn btn-outline-primary float-right">See all</a>
                        <h3 className="section-title">Tất cả sản phẩm</h3>
                    </header>

                    <List
                        grid={{ gutter: 16, column: 4 }}
                        size={'default'}
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 8,
                        }}
                        dataSource={listData}

                        renderItem={item => (
                            <List.Item style={{textAlign:"center"}}>
                                <Card title={<Image width={250} style={{textAlign:"center"}} src={item.image} />}>
                                    <a href=""><h5>{item.name}</h5></a>
                                    <h6>{Money(item.price)}</h6>

                                </Card>

                            </List.Item>
                        )}
                    />,
                </div>
            </section>




        </div>
    )
}

export default Home