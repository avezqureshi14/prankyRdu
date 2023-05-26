import React from "react";
import { Form, Input, Button, Card } from "antd";
import { Link } from "react-router-dom";
const StaffForm = () => {
  const onFinish = async (values) => {
    try {
      // Send form data to the server
      const response = await fetch("http://localhost:8800/staff", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Data successfully saved in the database
        console.log("Staff member created!");
      } else {
        // Handle error cases
        console.error("Failed to create staff member");
      }
    } catch (error) {
      console.error("Error:", error);
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
      name="staffForm"
      onFinish={onFinish}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 12 }}
    >
      <Form.Item
        name="staffName"
        label="Staff Name"
        rules={[{ required: true, message: "Please enter staff name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="qualification"
        label="Qualification"
        rules={[{ required: true, message: "Please enter qualification" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="subject"
        label="Subject"
        rules={[{ required: true, message: "Please enter subject" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="yearsOfExperience"
        label="Years of Experience"
        rules={[
          { required: true, message: "Please enter years of experience" },
          {  message: "Please enter a valid number" },
        ]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
        <Button type="primary" htmlType="submit">
          Create Staff
        </Button>
      </Form.Item>
    </Form>
    </Card>
  );
};

export default StaffForm;
