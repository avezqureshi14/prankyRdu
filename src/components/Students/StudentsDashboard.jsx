import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  ShopOutlined,
  SolutionOutlined,
  UserOutlined,
  CommentOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import StudentForm from './StudentCreate';
import StudentTable from './StudentList';

const { Sider, Content } = Layout;

const StudentDashboard = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to='/' >
          Imp. Announcements
          </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<ShopOutlined />}>
          <Link to='/placements' >
          Placements
          </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SolutionOutlined />}>
          <Link to='/staff' >
            Our Staff
            </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            <Link to='/students' >Students</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<CommentOutlined />}>
            <Link to='/users' >Users</Link>
          </Menu.Item>
 
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '16px' }}>
          <StudentTable/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default StudentDashboard;