import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';

const StudentTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        // Fetch student data from the server
        const response = await fetch('http://localhost:8800/students');
        const data = await response.json();

        if (response.ok) {
          setStudents(data);
        } else {
          console.error('Failed to fetch students');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchStudents();
  }, []);

  const columns = [
    {
      title: 'Branch Name',
      dataIndex: 'branchName',
      key: 'branchName',
    },
    {
      title: 'Student Name',
      dataIndex: 'studentName',
      key: 'studentName',
    },
    {
      title: 'Roll No',
      dataIndex: 'rollNo',
      key: 'rollNo',
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
    },
  ];


  return (
    <>
      <Button type="primary" style={{marginBottom:"1rem"}} >
      <Link to='/addStudent' >
      Add Student
      </Link>
      </Button>
      <Table dataSource={students} columns={columns} />
    </>
  );
};

export default StudentTable;
