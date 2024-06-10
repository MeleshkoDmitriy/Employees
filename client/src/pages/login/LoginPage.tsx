import { Layout } from '../../components/layout/Layout'
import { Card, Form, Row, Space, Typography } from 'antd'
import { AppInput } from '../../components/app-input/AppInput'
import { AppInputPassword } from '../../components/app-input-password/AppInputPassword'
import { AppButton } from '../../components/app-button/AppButton'
import { Link } from 'react-router-dom'
import { Paths } from '../../utils/paths'

export const LoginPage = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="All fields are required" style={{ width: '30rem', backgroundColor: 'rgb(0, 21, 41)'}}>
          <Form onFinish={() => null}>
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
              Don't have account yet? <Link to={Paths.REGISTER}>Registration</Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  )
}
