import { Layout } from '../../components/layout/Layout'
import { Card, Form, Row, Space, Typography } from 'antd'
import { AppInput } from '../../components/app-input/AppInput'
import { AppInputPassword } from '../../components/app-input-password/AppInputPassword'
import { AppButton } from '../../components/app-button/AppButton'
import { Link, useNavigate } from 'react-router-dom'
import { Paths } from '../../utils/paths'
import { UserData, useLoginMutation } from '../../store/services/auth'
import { isErrorWithMessage } from '../../utils/isErrorWithMessage'
import { useState } from 'react'
import { ErrorMessage } from '../../components/error-message/ErrorMessage'
import { ErrorWithMessage } from '../../types/types'

export const LoginPage = () => {

  const navigate = useNavigate();
  const [ loginUser, loginUserResult ] = useLoginMutation();
  const [ error, setError ] = useState('');

  const login = async (data: UserData) => {
    try {
      await loginUser(data).unwrap();

      navigate('/')
    } catch (err) {
      const isError = isErrorWithMessage(err);

      if(isError) {
        setError(err.data.message);
      } else {
        setError('Unknown error')
      }
    }
  }

  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="All fields are required" style={{ width: '30rem', backgroundColor: 'rgb(0, 21, 41)'}}>
          <Form onFinish={login}>
            <AppInput 
              name="email"
              type="email"
              placeholder="Email"
            />
            <AppInputPassword 
              name='password'
              placeholder="Password"
            />
            <AppButton
              type="primary"
              htmlType="submit"
              loading={false}
            >
              Sign in
            </AppButton>
          </Form>
          <Space style={{ paddingTop: '15px' }}>
            <Typography.Text style={{ color: 'white' }}>
              Don't have account yet?  <Link to={Paths.REGISTER}>Registration</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  )
}
