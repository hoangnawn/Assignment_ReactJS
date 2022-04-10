import React, { useState, useEffect } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { add } from '../../../api/product';
import { Breadcrumb, Layout, Input, Select, notification, Upload } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import { CateType } from '../../types/category';
import { listcate } from '../../../api/category';
import { uploadImg } from '../../../utils/home';
import { Button, Form } from 'react-bootstrap';


type FormTypes = {
    _id: number,
    category: number,
    name: string,
    price: number,
    desc: string,
    image: string,
}

const AddProduct = () => {
    const { register, handleSubmit, formState, reset } = useForm<FormTypes>();
    const [categories, setCategories] = useState<CateType[]>();
    const [preview, setPreview] = useState<string>();
    const handlePreview = (e: any) => {
        setPreview(URL.createObjectURL(e.target.files[0]));
    }

    useEffect(() => {
        (async () => { //get cate
            const { data } = await listcate();
            setCategories(data);
        })();
    }, []);

    const openNotificationWithIcon = (type: string) => {
        notification[type]({
            message: 'Thêm sản phẩm thành công',
        });
    };
    const onSubmit: SubmitHandler<FormTypes> = async data => {
        try {
            const url = await uploadImg(data.image[0])
            await add({ ...data, image: url });
            setPreview("");
            openNotificationWithIcon('success')
            reset();
        } catch (error: any) {
            console.log(error(error.response.data.error.message || error.response.data.message));

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
                    <div style={{ minHeight: 460, padding: 24 }}>
                        <Title>Thêm sản phẩm</Title>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Tên sản phẩm</Form.Label>
                                <Form.Control type="text" {...register('name')} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Giá</Form.Label>
                                <Form.Control type="number" {...register('price')} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Danh mục</Form.Label>
                                <Form.Select {...register('category')} placeholder="Chọn danh mục">
                                    <option>Chọn danh mục</option>
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
                                Thêm sản phẩm
                            </Button>
                        </Form>
                    </div>
                </Content>
            </Layout>
        </div>
    )
}

export default AddProduct


