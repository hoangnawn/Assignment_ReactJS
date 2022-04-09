import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { add, listbyID, update } from '../../../api/product';
import { Breadcrumb, Layout, Input, Select, notification } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import { ProductType } from '../../types/product';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { list, listbyIDCate } from '../../../api/category';
import { CateType } from '../../types/category';
import { uploadImg } from '../../../utils/home';

type FormTypes = {
    _id: number,
    name: string,
    price: number,
    category: number,
    desc: string,
    image: string,
}


const EditProduct = () => {
    const { register, handleSubmit, formState, reset } = useForm<FormTypes>();
    const [categories, setCategories] = useState<CateType[]>();
    const [preview, setPreview] = useState<string>();


    // const [form] = Form.useForm();
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate()

    useEffect(() => {
        // get categories
        const getCates = async () => {
            const { data } = await list();
            setCategories(data);
        };

        const start = async () => {
            await getCates();
            const { data } = await listbyIDCate(id);
            reset({
                ...data,
                category: data.category._id
            });
        };
        start();
    }, []);

    const openNotificationWithIcon = (type: string) => {
        notification[type]({
            message: 'Sửa sản phẩm thành công',
        });
    };
    const handlePreview = (e: any) => {
        setPreview(URL.createObjectURL(e.target.files[0]));
    }
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await listbyID(id);
            // form.setFieldsValue({
            //     name: data.name,
            //     price: data.price
            // })
            reset(data)
            console.log(data);

        }
        getProducts()
    }, [])

    const onSubmit: SubmitHandler<FormTypes> = async data => {
        try {
            if (typeof data.image === "object" && data.image.length) {
                data.image = await uploadImg(data.image[0]);
            }
            await update(data);
            console.log(data);
            openNotificationWithIcon('success')
            setTimeout(() => navigate("/admin/product"), 3000)
        } catch (error: any) {
            console.log(error)
        }
    }
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
                    <div style={{ minHeight: 500, padding: 24 }}>
                        <Title>Sửa sản phẩm</Title>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Tên sản phẩm</Form.Label>
                                <Form.Control type="text" {...register('name')} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Giá</Form.Label>
                                <Form.Control type="number" {...register('price')} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Danh mục</Form.Label>
                                <Form.Select {...register('category')} placeholder="Chọn danh mục">
                                    {categories?.map((cate, index) => (
                                        <option key={index} value={cate._id}>{cate.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Mô tả</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="mô tả"
                                    style={{ height: '100px' }}
                                    {...register('desc')}
                                />
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Chọn ảnh sản phẩm</Form.Label>
                                <Form.Control type="file" {...register('image')} onChange={e => handlePreview(e)} />
                            </Form.Group>
                            <div className="col-span-3">
                                <label className="block text-sm font-medium text-gray-700">Xem trước ảnh</label>
                                <div className="mt-1">
                                    <img
                                        src={preview || "https://vanhoadoanhnghiepvn.vn/wp-content/uploads/2020/08/112815953-stock-vector-no-image-available-icon-flat-vector.jpg"}
                                        alt="Preview Image"
                                        className="h-8 w-full object-cover rounded-md"
                                        style={{height: "300px"}}
                                    />
                                </div>
                            </div>
                            <Button variant="primary" type="submit">
                                Sửa
                            </Button>
                        </Form>
                    </div>
                </Content>
            </Layout>

        </div>
    )
}

export default EditProduct



