import { Layout } from '../../components/layout/Layout'
import { Card, Form, Row, Space, Typography } from 'antd'
import { AppInput } from '../../components/app-input/AppInput'
import { AppInputPassword } from '../../components/app-input-password/AppInputPassword'
import { AppButton } from '../../components/app-button/AppButton'
import { Link, useNavigate } from 'react-router-dom'
import { Paths } from '../../utils/paths'
import { useSelector } from 'react-redux'
import { selectUser } from '../../store/slices/authSlice'
import { useState } from 'react'
import { useRegisterMutation } from '../../store/services/auth'
import { User } from '@prisma/client'
import { isErrorWithMessage } from '../../utils/isErrorWithMessage'
import { ErrorMessage } from '../../components/error-message/ErrorMessage'

type RegisterData = Omit<User, "id"> & { confirmPassword: string }

export const RegisterPage = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [ error, setError ] = useState('');
  const [ registerUser ] = useRegisterMutation();

  const register = async (data: RegisterData) => {
    try { 

      await registerUser(data).unwrap();
      navigate('/'); 

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
        <Form onFinish={register}>
        <AppInput 
            name="name"
            placeholder="Name"
          />
          <AppInput 
            name="email"
            type="email"
            placeholder="Email"
          />
          <AppInputPassword 
            name='password'
            placeholder="Password"
          />
          <AppInputPassword 
            name='confirmPassword'
            placeholder="Repeat password"
          />
          <AppButton
            type="primary"
            htmlType="submit"
            loading={false}
          >
            Register
          </AppButton>
        </Form>
        <Space style={{ paddingTop: '15px' }}>
          <Typography.Text style={{ color: 'white' }}>
            Do you have account already?  <Link to={Paths.LOGIN}>Sign in</Link>
          </Typography.Text>
          <ErrorMessage message={error} />
        </Space>
      </Card>
    </Row>
  </Layout>
  )
}
