import React, { useState } from 'react';
import { Form, Input, Button, Card } from 'antd';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

const AnnouncementForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    axios
      .post('http://localhost:8800/announcements', values) // Replace '/api/announcements' with your backend endpoint
      .then((response) => {
        // Handle successful response if needed
        console.log(response.data);
        navigate('/')
      })
      .catch((error) => {
        // Handle error if needed
        console.error(error);
      });
  };

  return (
    <Card>
    <Link to="/">
      <Button type="primary" style={{ marginBottom: "1rem" }}>
       Back
      </Button>
      </Link>
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        name="topic"
        label="Topic"
        rules={[
          {
            required: true,
            message: 'Please enter the topic',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
            message: 'Please enter the description',
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item> 
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Card>
  );
};

export default AnnouncementForm;
