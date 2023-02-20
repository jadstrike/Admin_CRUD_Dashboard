import { Button, Checkbox, Form, Input } from "antd";
import "./Login.css";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login-form-wrapper">
      <div className="login-items">
        <Form
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="logo">
            <img
              style={{ width: "40px", height: "40px", paddingRight: "9px" }}
              src="https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png"
              alt=""
            />
            <h1 className="logo-name">LMS</h1>
          </div>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "required",
              },
            ]}
          >
            <div>
              <p>Username or Email</p>
              <Input
                placeholder="Username or Email"
                style={{ width: "296px" }}
              />
            </div>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "required",
              },
            ]}
          >
            <div>
              <p>Password</p>
              <Input.Password
                placeholder="Password"
                style={{ width: "296px" }}
              />
            </div>
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              style={{
                width: "296px",
                backgroundColor: "#003A8C",
                borderRadius: "1px",
              }}
              type="primary"
              htmlType="submit"
              className="login-button"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
