import { notification } from 'antd'
import React, { useState } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { useNavigate } from 'react-router-dom'
import { signup } from '../../api/auth'
import FooterHome from '../../components/home/FooterHome'
import HeaderHome from '../../components/home/HeaderHome'

type FormTypes = {
  name: string,
  email: string,
  password: string,
}

const Signup = () => {
  const { register, handleSubmit, formState, reset } = useForm<FormTypes>();
  const success = (type: string) => {
    notification[type]({
      message: 'Đăng ký thành công',
    });
  };
  const errors = (type: string) => {
    notification[type]({
      message: 'Tài khoản đã tồn tại',
    });
  };
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormTypes> = async data => {
    try {      
      await signup(data);
      console.log(data);
      success('success')
      reset();
    } catch (error: any) {
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
                      <h3 className="display-4">Register</h3>
                      <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group as={Col} md="10" controlId="validationCustomUsername">
                          <Form.Label>Full Name</Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              placeholder="Full Name"
                              aria-describedby="inputGroupPrepend"
                              required
                              {...register('name')}
                            />
                            <Form.Control.Feedback type="invalid">
                              Không được để trống
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
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
                              placeholder="Email"
                              aria-describedby="inputGroupPrepend"
                              required
                              {...register('password')}
                            />
                            <Form.Control.Feedback type="invalid">
                              Không được để trống
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                        <br />
                        <Button type="submit">Đăng ký</Button>
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

export default Signup