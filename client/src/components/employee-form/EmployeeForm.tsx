import { Employee } from "@prisma/client";
import { Card, Form, Space } from "antd";
import { AppInput } from "../app-input/AppInput";
import { ErrorMessage } from "../error-message/ErrorMessage";
import { AppButton } from "../app-button/AppButton";

type Props<T> = {
  onFinish: (values: T) => void;
  title: string;
  btnText: string;
  error?: string;
  employee?: T
}

export const EmployeeForm = ({
  onFinish,
  title,
  error,
  employee,
  btnText
}: Props<Employee>) => {
  return (
    <Card title={title} style={{ width: '30rem' }}>
      <Form name="employee-form" onFinish={onFinish} initialValues={ employee }>
        <AppInput type="text" name="firstName" placeholder="Name" />
        <AppInput type="text" name="lastName" placeholder="Surname" />
        <AppInput type="number" name="age" placeholder="Age" />
        <AppInput type="text" name="address" placeholder="Address" />
        <Space>
          <ErrorMessage message={error} />
          <AppButton htmlType="submit">
            {btnText}
          </AppButton>
        </Space>
      </Form>
    </Card>
  )
}
