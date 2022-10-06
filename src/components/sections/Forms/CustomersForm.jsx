import { Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { getMinLengthRule, getRequiredRule } from "../../../helpers/validation";

export default function CustomersForm({ onSubmit, defaultValue, form, name }) {
  return (
    <Form
      name={name}
      initialValues={{ ...defaultValue }}
      onFinish={onSubmit}
      layout="vertical"
      form={form}
    >
      <Form.Item
        name="firstName"
        rules={[getRequiredRule(), getMinLengthRule(5)]}
        label="First Name"
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="First Name"
        />
      </Form.Item>
      <Form.Item
        rules={[getMinLengthRule(5)]}
        name="Last Name"
        label="Last Name"
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="lastName"
        />
      </Form.Item>
    </Form>
  );
}
