import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
const PlacementTable = () => {
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        // Fetch placement data from the server
        const response = await fetch('http://localhost:8800/placements');
        const data = await response.json();

        if (response.ok) {
          setPlacements(data);
        } else {
          console.error('Failed to fetch placements');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPlacements();
  }, []);

  const columns = [
    {
      title: 'Student Name',
      dataIndex: 'studentName',
      key: 'studentName',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Package',
      dataIndex: 'package',
      key: 'package',
    },
    {
      title: 'Branch',
      dataIndex: 'branch',
      key: 'branch',
    },
  ];

  return (
    <>
      <Button type="primary" style={{marginBottom:"1rem"}} >
      <Link to='/placementCreate' >
      Add Record
      </Link>
      </Button>
      <Table dataSource={placements} columns={columns} />
    </>
  );
};

export default PlacementTable;
