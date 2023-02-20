import { EditOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, Pagination, Typography } from "antd";
import CreateCourse from "./CreateCourse";
const { Header, Content, Footer, Sider } = Layout;
import React, { useState } from "react";
const { Title } = Typography;
import CourseTable from "./CourseTable";

const { Item } = Menu;
import "./DashBoard.css";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const DashBoard = () => {
  const [isList, setList] = useState(false);
  const items = [
    getItem("Course Create", "1", <EditOutlined />),
    getItem("Course List", "2", <UnorderedListOutlined />),
  ];
  const [selectedItem, setSelectedItem] = useState("create");
  const handleClick = (e) => {
    console.log(e.key);
    if (e.key === "1") {
      setList(false);
    } else {
      setList(true);
    }
  };
  return (
    <Layout>
      <Sider
        style={{ backgroundColor: "#FFFFFF" }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo-dash">
          <img
            style={{
              width: "40px",
              height: "40px",
              paddingLeft: "8px",
              paddingTop: "10px",
            }}
            src="https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png"
            alt=""
          />
          <h1 className="logo-name-dash">LMS</h1>
        </div>
        <Menu
          onClick={handleClick}
          style={{ marginTop: "20px" }}
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,

            backgroundColor: "#003A8C",
          }}
        >
          <div className="title-dash">
            {isList ? (
              <Title level={5} style={{ color: "white" }}>
                Course List
              </Title>
            ) : (
              <Title level={5} style={{ color: "white" }}>
                Create Course
              </Title>
            )}
          </div>
        </Header>
        {isList ? (
          <div className="table-items">
            <CourseTable></CourseTable>
          </div>
        ) : (
          <div className="content-wrapper">
            <Content
              style={{
                margin: "24px 16px 0",
              }}
            >
              <div
                style={{
                  marginTop: "30px",
                  marginLeft: "25px",
                  width: "400px",
                  height: "390px",
                  padding: 24,
                  minHeight: 100,
                  background: "white",
                }}
                className="create-form"
              >
                <CreateCourse></CreateCourse>
              </div>
            </Content>
          </div>
        )}
        {/* {isList && <Pagination defaultCurrent={1} total={50} />} */}
      </Layout>
    </Layout>
  );
};

export default DashBoard;
