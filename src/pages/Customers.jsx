/* eslint-disable react/no-unstable-nested-components */
import { EditOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Pagination,
  Row,
  Space,
  Table,
  Typography,
  Input,
  Modal,
  Form,
} from "antd";
import { useEffect, useRef, useState } from "react";
import PerPageSelect from "../components/general/Table/PerPageSelect";
import CustomersForm from "../components/sections/Forms/CustomersForm";
import useQueryString from "../hooks/useQueryString";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

export default function Customers() {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [editableCustomerRow, setEditableCustomerRow] = useState();
  const searchInput = useRef(null);
  const [take, setTake] = useQueryString("customersTake", 10);
  const [skip, setSkip] = useQueryString("customersSkip", 0);
  const [customerCreateModalVisibility, setCustomerCreateModalVisibility] =
    useState();
  const [createCustomerForm] = Form.useForm();
  const [updateCustomerForm] = Form.useForm();

  const handlePagination = (page) => {
    setSkip((page - 1) * take);
  };

  const handlePerPage = (amount) => {
    setTake(amount);
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) => (searchedColumn === dataIndex ? searchText : text),
  });

  const columns = [
    {
      dataIndex: "edit",
      title: "Update",
      render: (_, row) => (
        <Typography.Link onClick={() => setEditableCustomerRow(row)}>
          <EditOutlined />
        </Typography.Link>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Correct first name",
      dataIndex: "age",
      key: "age",
      ...getColumnSearchProps("age"),
    },
    {
      title: "Address1",
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps("address"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Address2",
      dataIndex: "address2",
      key: "address2",
      ...getColumnSearchProps("address2"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      ...getColumnSearchProps("phone"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "GgPhone",
      dataIndex: "Ggphone",
      key: "Ggphone",
      ...getColumnSearchProps("Ggaddress"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "Gender",
      ...getColumnSearchProps("Gender"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "Email",
      ...getColumnSearchProps("Email"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Create Time",
      dataIndex: "createTime",
      key: "createTime",
      ...getColumnSearchProps("createTime"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Voice name",
      dataIndex: "voiceName",
      key: "voiceName",
      ...getColumnSearchProps("voiceName"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Armenian Translation",
      dataIndex: "armenianTranslation",
      key: "armenianTranslation",
      ...getColumnSearchProps("armenianTranslation"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Pickup Point",
      dataIndex: "pickupPoint",
      key: "pickupPoint",
      ...getColumnSearchProps("pickupPoint"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Delivery Type Id",
      dataIndex: "deliveryTypeId",
      key: "deliveryTypeId",
      ...getColumnSearchProps("deliveryTypeId"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "User Color",
      dataIndex: "userColor",
      key: "userColor",
      ...getColumnSearchProps("userColor"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Bonus %",
      dataIndex: "bonusPercent",
      key: "bonusPercent",
      ...getColumnSearchProps("userColor"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Special Percent",
      dataIndex: "specialPercent",
      key: "specialPercent",
      ...getColumnSearchProps("specialPercent"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Company Tax Code",
      dataIndex: "companyTaxCode",
      key: "companyTaxCode",
      ...getColumnSearchProps("companyTaxCode"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
  ];

  useEffect(() => {
    // refetch({ take, skip });
  }, [take, skip]);

  return (
    <div>
      <Row style={{ margin: "40px" }}>
        <Col span={24}>
          <h1>Customers</h1>
          <Row style={{ marginBottom: 30 }}>
            <Button
              onClick={() => {
                setCustomerCreateModalVisibility(true);
              }}
              type="primary"
            >
              Create User
            </Button>
          </Row>
          <Table
            loading={false}
            pagination={false}
            dataSource={data}
            columns={columns}
          />
          <Modal
            title="Update customer"
            confirmLoading
            onCancel={() => setEditableCustomerRow(null)}
            onOk={() => {}}
            visible={editableCustomerRow}
          >
            <CustomersForm
              initialValues={{ ...editableCustomerRow }}
              onFinish={() => {}}
              form={updateCustomerForm}
              name="edit-customer"
            />
          </Modal>
          <Modal
            title="Create customer"
            confirmLoading
            onCancel={() => setCustomerCreateModalVisibility(false)}
            onOk={() => {}}
            visible={customerCreateModalVisibility}
          >
            <h1>Create customer</h1>
            <CustomersForm
              onFinish={() => {}}
              form={createCustomerForm}
              name="create-food"
              initialValues={{}}
            />
          </Modal>
          <Row justify="end">
            <Row style={{ margin: "20px 0" }}>
              <Col span={16}>
                <Pagination
                  current={skip / take + 1}
                  onChange={handlePagination}
                  total={data.length}
                  pageSize={take}
                />
              </Col>

              <Col span={6}>
                <PerPageSelect onSelect={handlePerPage} />
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
