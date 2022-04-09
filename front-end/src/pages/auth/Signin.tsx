import React from 'react'
import { Button, Col, Form, InputGroup, } from 'react-bootstrap'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { signin } from '../../api/auth'
import FooterHome from '../../components/home/FooterHome'
import HeaderHome from '../../components/home/HeaderHome'
import { notification } from 'antd'



type FormTypes = {
    name: string,
    email: string,
    password: string,
}

const Signin = ({ onLogin }: LoginPageProps) => {
    const { register, handleSubmit, formState, reset } = useForm<FormTypes>();
    const navigate = useNavigate();
    const success = (type: string) => {
        notification[type]({
            message: 'Đăng nhập thành công',
        });
    };
    const errors = (type: string) => {
        notification[type]({
            message: 'Tài khoản hoặc mật khẩu không đúng',
        });
    };
    const onSubmit: SubmitHandler<FormTypes> = async data => {
        try {
            const { data: user } = await signin(data);
            localStorage.setItem('user', JSON.stringify(user))
            success('success')
            if (user.user.role == 1) {
                navigate("/admin");
            } else {
                navigate("/");
            }
        } catch (error) {
            errors('error')
            console.log(error);
        }
    }
    return (
        <div>
            <HeaderHome />
            <div className="maincontainer">
                <div className="container-fluid">
                    <div className="row no-gutter">

                        <div className="col-md-6 d-none d-md-flex bg-image"></div>

                        <div className="col-md-6 bg-light">
                            <div className="login d-flex align-items-center py-5">

                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-7 mx-auto">
                                            <h3 className="display-4">Split login page!</h3>
                                            <p className="text-muted mb-4">Create a login split page using Reactjs & Bootstrap 5.</p>
                                            <Form onSubmit={handleSubmit(onSubmit)}>
                                                <Form.Group as={Col} md="10" controlId="validationCustomUsername">
                                                    <Form.Label>Email</Form.Label>
                                                    <InputGroup hasValidation>
                                                        <Form.Control
                                                            type="email"
                                                            placeholder="Email"
                                                            aria-describedby="inputGroupPrepend"
                                                            required
                                                            {...register('email')}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Không được để trống
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                                <Form.Group as={Col} md="10" controlId="validationCustomUsername">
                                                    <Form.Label>Password</Form.Label>
                                                    <InputGroup hasValidation>
                                                        <Form.Control
                                                            type="password"
                                                            placeholder="Password"
                                                            aria-describedby="inputGroupPrepend"
                                                            required
                                                            {...register('password')}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Không được để trống
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                                <Form.Control type='hidden' value={0} {...register('role')} />
                                                <br />
                                                <Button type="submit">Đăng nhập</Button>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterHome />
        </div>
    )
}

export default Signin