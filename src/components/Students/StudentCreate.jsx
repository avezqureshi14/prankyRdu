import React, { useState } from "react";
import { Form, Input, Button, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const StudentForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      // Send form data to the server
      const response = await fetch("http://localhost:8800/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Data successfully saved in the database
        console.log("Data saved!");
        form.resetFields();
        navigate("/students");
      } else {
        // Handle error cases
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>

      <Card style={{ margin: "3rem" }}>
      <Link to="/students">
      <Button type="primary" style={{ marginBottom: "1rem" }}>
       Back
      </Button>
      </Link>
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            name="branchName"
            label="Branch Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="studentName"
            label="Student Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="rollNo" label="Roll No" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="year" label="Year" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default StudentForm;
