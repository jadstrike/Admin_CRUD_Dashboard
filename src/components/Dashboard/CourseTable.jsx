import { Table, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { current } from "@reduxjs/toolkit";
import "./CourseTable.css";

function CourseTable() {
  const dataSource = [
    {
      key: "1",
      title: "Google UX Design Certification Course",
      date: "2023-02-20",
      enrolled: 30,
    },
    {
      key: "2",
      title: "Google UX Design Certification Course",
      date: "2023-02-20",
      enrolled: 30,
    },
    {
      key: "3",
      title: "Google UX Design Certification Course",
      date: "2023-02-20",
      enrolled: 30,
    },
  ];

  const columns = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Course Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (dataString) => {
        const date = new Date(dataString);
        const formattedDate = date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });
        return formattedDate;
      },
    },
    {
      title: "Enrolled Counts",
      dataIndex: "enrolled",
      key: "enrolled",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <span>
          <Button type="link">Edit</Button>
          <Button type="link">Delete</Button>
        </span>
      ),
    },
  ];

  const paginationStyle = { float: "left" };

  return (
    <div className="table-wrapper">
      <Table
        size="large"
        dataSource={dataSource}
        columns={columns}
        pagination={{ style: paginationStyle }}
      />
    </div>
  );
}

export default CourseTable;
