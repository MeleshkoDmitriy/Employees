import { Button, Form } from "antd";
import React from "react";

interface AppButtonProps {
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  type?: "primary" | "dashed" | "link" | "text" | "default" | undefined;
  danger?: boolean;
  loading?: boolean;
  shape?: "default" | "circle" | "round" | undefined;
  icon?: React.ReactNode;
}

export const AppButton = ({
  children,
  htmlType = "button",
  type,
  danger,
  loading,
  shape,
  icon,
  onClick,
}: AppButtonProps) => {
  return (
    <Form.Item style={{
      marginBottom: "0"
    }}>
      <Button
        htmlType={htmlType}
        type={type}
        danger={danger}
        loading={loading}
        shape={shape}
        icon={icon}
        onClick={onClick}
        style={{ 
          backgroundColor: "transparent",
          borderColor: "white"
         }}
      >
        <span style={{
          backgroundColor: "transparent",
          color: "white",
          fontWeight: "bold",
        }}>{children}</span>
      </Button>
    </Form.Item>
  );
};
