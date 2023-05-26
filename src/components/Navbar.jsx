import React from "react";
import { Layout, Menu, Input, Badge, Avatar, Dropdown } from "antd";
import {
  HomeOutlined,
  ShopOutlined,
  SolutionOutlined,
  UserOutlined,
  CommentOutlined,
  ExclamationCircleOutlined,
  BellOutlined,
  LogoutOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header } = Layout;
const { Search } = Input;

const Navbar = () => {
  const handleLogout = () => {
    // Handle logout logic here
  };

  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <UserOutlined />
        Profile
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        <LogoutOutlined />
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ paddingInline: "7px" }} className="navbar">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" style={{ background: "transparent" }}>
            <span> <h1>ADMIN PANEL</h1></span>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
