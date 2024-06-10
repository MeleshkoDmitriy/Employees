import { Form, Input } from "antd"
import { FC } from "react";

interface FormProps {
  name: string;
  placeholder: string;
  type?: "text" | "number" | "password" | "email" | undefined;
}

export const AppInput:FC<FormProps> = ({
  name,
  placeholder,
  type = "text",
}) => {
  return (
    <Form.Item
      name={name}
      rules={[{
        required: true,
        message: 'This field is required!',
      }]}
      shouldUpdate={true}
    >
      <Input 
        placeholder={placeholder}
        type={type}
        size="large"
      />
    </Form.Item>
  )
}
