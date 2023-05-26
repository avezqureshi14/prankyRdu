import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { Link } from 'react-router-dom';
const PlacementForm = () => {
  const onFinish = async (values) => {
    try {
      // Send form data to the server
      const response = await fetch('http://localhost:8800/placements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Placement record created successfully
        console.log('Placement record created!');
      } else {
        // Handle error cases
        console.error('Failed to create placement record');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Card>
    <Link to="/staff">
      <Button type="primary" style={{ marginBottom: "1rem" }}>
       Back
      </Button>
      </Link>
    <Form
      name="placementForm"
      onFinish={onFinish}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 12 }}
    >
      <Form.Item
        name="studentName"
        label="Student Name"
        rules={[{ required: true, message: 'Please enter student name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="company"
        label="Company"
        rules={[{ required: true, message: 'Please enter company name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="package"
        label="Package"
        rules={[
          { required: true, message: 'Please enter package' },
          { message: 'Please enter a valid number' },
        ]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        name="branch"
        label="Branch"
        rules={[{ required: true, message: 'Please enter branch' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
        <Button type="primary" htmlType="submit">
          Add Record
        </Button>
      </Form.Item>
    </Form>
    </Card>
  );
};

export default PlacementForm;
