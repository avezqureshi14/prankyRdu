import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
const StaffTable = () => {
  const [staffMembers, setStaffMembers] = useState([]);

  useEffect(() => {
    const fetchStaffMembers = async () => {
      try {
        // Fetch staff member data from the server
        const response = await fetch('http://localhost:8800/staff');
        const data = await response.json();

        if (response.ok) {
          setStaffMembers(data);
        } else {
          console.error('Failed to fetch staff members');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchStaffMembers();
  }, []);

  const columns = [
    {
      title: 'Staff Name',
      dataIndex: 'staffName',
      key: 'staffName',
    },
    {
      title: 'Qualification',
      dataIndex: 'qualification',
      key: 'qualification',
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Years of Experience',
      dataIndex: 'yearsOfExperience',
      key: 'yearsOfExperience',
    },
  ];

  return (
    <>
      <Button type="primary" style={{marginBottom:"1rem"}} >
      <Link to='/staffCreate' >
      Add Staff
      </Link>
      </Button>
      <Table dataSource={staffMembers} columns={columns} />
    </>
  );
};

export default StaffTable;
