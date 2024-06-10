import { Form, Input } from 'antd'
import { NamePath } from 'antd/es/form/interface'
import { FC } from 'react'

interface AppInputPasswordProps {
  name: string
  placeholder: string
  dependencies?: NamePath[]
}

export const AppInputPassword: FC<AppInputPasswordProps> = ({
  name,
  placeholder,
  dependencies,
}) => {
  return (
<Form.Item
      name={name}
      dependencies={dependencies}
      hasFeedback
      rules={[
        {
          required: true,
          message: "This field is required",
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value ) {
              return Promise.resolve();
            }

            if (name === 'confirmPassword') {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("Passwords should be the same!")
              );
            } else {
              if (value.length < 6) {
                return Promise.reject(
                  new Error("Password should be at least 6 characters")
                );
              }

              return Promise.resolve();
            }
          },
        }),
      ]}
    >
      <Input.Password placeholder={placeholder} size="large" />
    </Form.Item>
  )
}
