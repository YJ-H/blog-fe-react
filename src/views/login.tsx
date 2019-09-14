import React, { ReactElement, FunctionComponent } from 'react'
import { Icon, Input, Button, Checkbox, message } from 'antd'
import Form, { FormComponentProps } from 'antd/lib/form/index'
import axios from 'axios'
import http from '../util/http'
const style = require('../style/login.module.less')

interface LoginParams {
  name: string;
  password: string | number;
}

const loginApi = async (params: LoginParams) => {
  let { data } = await http.post('/api/oa/user/login', params)
  if (data.code !== 0) {
    message.warning(data.msg)
    return false
  }
  localStorage.setItem('loginedtoken', data.data['token'])
  location.replace('/')
}
const LoginDOM: FunctionComponent<FormComponentProps> = (
  props: FormComponentProps
): ReactElement => {
  const handleSubmit = (e: any) => {
    e.preventDefault()
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values)
        let params = {
          name: values.username,
          password: values.password
        }
        loginApi(params)
      }
    })
  }
  const { getFieldDecorator } = props.form
  return (
    <div className={style['login']}>
      <Form onSubmit={handleSubmit} className={style['login-form']}>
        <h2>登 陆</h2>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Username'
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='password'
              placeholder='Password'
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <Button type='primary' htmlType='submit' className={style['login-form-button']}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Form.create({})(LoginDOM)
