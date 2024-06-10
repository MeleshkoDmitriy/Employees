import React from "react";
import styles from "./Header.module.css";
import { Layout, Space, Typography } from "antd";
import {
  LoginOutlined,
  TeamOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { AppButton } from "../app-button/AppButton";
import { Link, useNavigate } from "react-router-dom";
import { Paths } from "../../utils/paths";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../store/slices/authSlice";

export const Header = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login')
  }

  return (
    <Layout.Header className={styles.header}>
      <Space className={styles.wrapper}>
        <TeamOutlined className={styles.teamOutlined} />
        <Link to={Paths.HOME}>
          <Typography.Title
            level={1}
            style={{
              color: "white",
              marginBottom: "0",
            }}
          >
            Employees
          </Typography.Title>
        </Link>
      </Space>
      {user ? (
        <AppButton
          type="primary"
          icon={<UserAddOutlined />}
          onClick={onLogoutClick}
        >
          Logout
        </AppButton>
      ) : (
        <Space className={styles.wrapper}>
          <Link to={Paths.REGISTER}>
            <AppButton type="primary" icon={<UserAddOutlined />}>
              Register
            </AppButton>
          </Link>
          <Link to={Paths.LOGIN}>
            <AppButton type="primary" icon={<LoginOutlined />}>
              Sign in
            </AppButton>
          </Link>
        </Space>
      )}
    </Layout.Header>
  );
};
