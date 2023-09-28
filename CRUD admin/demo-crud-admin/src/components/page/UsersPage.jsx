import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

function UsersPage() {
  const [data, setData] = useState([]);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/users/${id}`);
    loadUser();
  };

  // Search users
  const [searchInput, setSearchInput] = useState("");
  // Sort
  const [sortType, setSortType] = useState("asc");
  const [sortTypeName, setSortTypeName] = useState("");
  // Phân trang
  // Trang hiện tại
  const [curPage, setCurPage] = useState(1);
  // Số lượng hiển thị 1 trang
  const [limitPerPage, setLimitPerPage] = useState(5);
  // Tổng số trang
  const [totalPage, setTotalPage] = useState(1);

  const [check, setCheck] = useState(false);

  const handleSort = (sortName) => {
    setSortTypeName(sortName);
    setSortType(sortType === "asc" ? "desc" : "asc");
  };

  const loadUser = async () => {
    // let result = await axios.get("http://localhost:8000/users");
    // setData(result.data);

    let url = `http://localhost:8000/users?_page=${curPage}&_limit=${limitPerPage}`;
    if (searchInput) {
      url = `http://localhost:8000/users?q=${searchInput}`;
    } else if (sortTypeName) {
      if (sortType === "desc") {
        url = `http://localhost:8000/users?_sort=${sortTypeName}&_order=desc&_page=${curPage}&_limit=${limitPerPage}`;
      } else {
        url = `http://localhost:8000/users?_sort=${sortTypeName}&_order=asc&_page=${curPage}&_limit=${limitPerPage}`;
      }
    }

    let result = await axios.get(url);

    console.log(url);

    const countRes = result.headers["x-total-count"];
    // console.log(countRes);
    const totalRes = Math.ceil(countRes / limitPerPage);
    // console.log(totalPage);

    setData(result.data);
    setTotalPage(totalRes);
  };

  let paginationItem = [];
  for (let i = 1; i <= totalPage; i++) {
    paginationItem.push(
      <Pagination.Item
        key={i}
        onClick={() => setCurPage(i)}
        active={i === curPage}
      >
        {i}
      </Pagination.Item>
    );
  }

  useEffect(() => {
    loadUser();
  }, [searchInput, sortType, sortTypeName, curPage]);

  return (
    <div>
      <h1>Quản lý Users</h1>
      <Navbar className='bg-body-tertiary justify-content-around'>
        <Form>
          <Link to={"/add-user"}>
            <Button variant='outline-success'>Add User</Button>
          </Link>
        </Form>
        <Form>
          <Row>
            <Col xs='auto'>
              <Form.Control
                type='text'
                placeholder='Search'
                className=' mr-sm-2'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </Col>
            <Col xs='auto'>
              <Button type='submit'>Search</Button>
            </Col>
          </Row>
        </Form>
      </Navbar>

      <Table
        striped
        bordered
        hover
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>
              Age
              <i
                className='fa-solid fa-sort'
                onClick={() => handleSort("age")}
              ></i>
            </th>
            <th>Email</th>
            <th>Phone</th>
            <th colSpan={3}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{element.name}</td>
              <td>{element.age}</td>
              <td>{element.email}</td>
              <td>{element.phone}</td>
              <td>
                <Button variant='outline-info' className='me-2'>
                  <i className='fa-solid fa-eye'></i>
                </Button>
                <Link to={`/edit-user/${element.id}`}>
                  <Button variant='outline-warning' className='me-2'>
                    <i className='fa-regular fa-pen-to-square'></i>
                  </Button>
                </Link>
                <Button
                  variant='outline-danger'
                  className='me-2'
                  onClick={() => handleDelete(element.id)}
                >
                  <i className='fa-solid fa-trash'></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Phân trang */}

      <Pagination>
        <Pagination.Prev
          onClick={() => setCurPage(curPage - 1)}
          disabled={curPage === 1}
        />
        {paginationItem}
        <Pagination.Next
          onClick={() => setCurPage(curPage + 1)}
          disabled={curPage === totalPage}
        />
      </Pagination>
    </div>
  );
}

export default UsersPage;
