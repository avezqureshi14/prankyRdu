import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all users from the backend API
    axios
      .get('http://localhost:8800/api/auth')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log('Failed to fetch users:', error);
      });
  }, []);

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text, record) => `${record.username}@gmail.com`,
    },
    // Add more columns as needed
  ];

  return (
    <div>
      <h1>User List</h1>
      <Table style={{margin:'3rem'}} dataSource={users} columns={columns} rowKey="_id" />
    </div>
  );
};

export default UserList;
