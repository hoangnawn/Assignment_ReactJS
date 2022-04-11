import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { listbyID } from '../../api/product';
import { Money } from '../../utils/home';
import { ProductType } from '../types/product';

type Props = {}

const ProductDetail = (props: Props) => {
    const [product, setProduct] = useState<ProductType>();
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        const getProducts = async () =>{
            const { data } = await listbyID(id);
            console.log(data);
            
            setProduct(data)
        }
        getProducts()
    }, [])

    return (
        <div>

            <section className="section-content padding-y bg">
                <div className="container">

                    <article className="card">
                        <div className="card-body">
                            <div className="row">
                                <aside className="col-md-6">
                                    <article className="gallery-wrap">
                                        <div className="card img-big-wrap">
                                            <a href="#"> <img src={product?.image} /></a>
                                        </div>
                                    </article>
                                </aside>
                                <main className="col-md-6">
                                    <article>
                                        <h3 className="title">{product?.name}</h3>
                                        <hr />

                                        <div className="mb-3">
                                            <h6>Mô Tả</h6>
                                            <span>{product?.desc}</span>
                                        </div>
                                        <div className="mb-3">
                                            <var className="price h4">{Money(product?.price || 0)}</var> <br />
                                        </div>

                                        <div className="mb-4">
                                            <a href="#" className="btn btn-primary mr-1">Buy now</a>
                                            <a href="#" className="btn btn-light">Add to card</a>
                                        </div>

                                    </article>
                                </main>
                            </div>
                        </div>
                    </article>
                    {/* <article className="card mt-5">
                        <div className="card-body">
                            <div className="row">
                                <aside className="col-md-6">
                                    <h5>Parameters</h5>
                                    <dl className="row">
                                        <dt className="col-sm-3">Display</dt>
                                        <dd className="col-sm-9">13.3-inch LED-backlit display with IPS</dd>

                                        <dt className="col-sm-3">Processor</dt>
                                        <dd className="col-sm-9">2.3GHz dual-core Intel Core i5</dd>

                                        <dt className="col-sm-3">Camera</dt>
                                        <dd className="col-sm-9">720p FaceTime HD camera</dd>

                                        <dt className="col-sm-3">Memory</dt>
                                        <dd className="col-sm-9">8 GB RAM or 16 GB RAM</dd>

                                        <dt className="col-sm-3">Graphics</dt>
                                        <dd className="col-sm-9">Intel Iris Plus Graphics 640</dd>
                                    </dl>
                                </aside>
                                <aside className="col-md-6">
                                    <h5>Features</h5>
                                    <ul className="list-check">
                                        <li>Best performance of battery</li>
                                        <li>5 years warranty for this product</li>
                                        <li>Amazing features and high quality</li>
                                        <li>Best performance of battery</li>
                                        <li>5 years warranty for this product</li>
                                    </ul>
                                </aside>
                            </div>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </article> */}
                </div>


            </section>
        </div>
    )
}

export default ProductDetail