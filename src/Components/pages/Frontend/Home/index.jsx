import React, { useState } from "react";
import { Button, Modal, Input, Form } from "antd";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const Home = () => {
  const [showTable, setShowTable] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [usersData, setUsersData] = useState(
    JSON.parse(localStorage.getItem("usersData")) || []
  );

  const toggleData = (e) => {
    e.preventDefault();
    setShowTable((prevShowTable) => !prevShowTable);
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setIsModalVisible(true);
  };

  const handleDelete = (uid) => {
    const updatedUsersData = usersData.filter((user) => user.uid !== uid);
    setUsersData(updatedUsersData);
    localStorage.setItem("usersData", JSON.stringify(updatedUsersData));
  };

  const handleModalOk = () => {
    const updatedUsersData = usersData.map((user) =>
      user.uid === currentUser.uid ? currentUser : user
    );
    setUsersData(updatedUsersData);
    localStorage.setItem("usersData", JSON.stringify(updatedUsersData));
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <>
      <main className="py-5">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h4>Show Users Data</h4>
              <Button
                onClick={toggleData}
                className={`mt-4 rounded-2 ${showTable ? "mb-4" : ""}`}
                type="primary"
              >
                {showTable ? "Hide Data" : "Click to see data"}
              </Button>
            </div>
          </div>

          {showTable && (
            <div className="row">
              <div className="col">
                <div className="table-responsive">
                  <table className="table table-striped table-hover align-middle text-center">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>User Id</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usersData.map((user, i) => {
                        const { fullName, email, dob, uid } = user;
                        return (
                          <tr key={i}>
                            <th>{i + 1}</th>
                            <td>{fullName}</td>
                            <td>{email}</td>
                            <td>{dob}</td>
                            <td>{uid}</td>
                            <td>
                              <Button
                                type="primary"
                                onClick={() => handleEdit(user)}
                                className="me-2"
                              >
                                <FiEdit />
                              </Button>
                              <Button
                                type="danger"
                                onClick={() => handleDelete(uid)}
                              >
                                <FiTrash2 />
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Modal
        title="Edit User"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Form layout="vertical">
          <Form.Item label="Full Name">
            <Input
              name="fullName"
              value={currentUser.fullName}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Email">
            <Input
              name="email"
              value={currentUser.email}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Date of Birth">
            <Input
              name="dob"
              value={currentUser.dob}
              onChange={handleInputChange}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Home;
