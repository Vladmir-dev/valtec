import React, { useState, useEffect } from "react";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import { useSelector, useDispatch } from "react-redux";
import "../new/new.scss";
import { useParams } from "react-router";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Update = () => {
  const users = useSelector((state) => state.job.users);
  const loading = useSelector((state) => state.job.isLoading);
  const token = useSelector((state) => state.user.token);
  const userId = useParams();

  const user = users.filter((x) => x.id == userId.id)[0];
  console.log("user", user);
  const data = {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone_number: user.phone_number,
    office_location: user.office_location,
    date_of_birth: user.date_of_birth,
    sex: user.sex,
    user_type: user.user_type,
    username: user.username,
  };

  const [formData, setFormData] = useState(data);
  console.log(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Update User</h1>
        </div>
        <div className="bottom">
          {/* <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div> */}
          <div className="right">
            <form style={{ display: "flex", flexDirection: "c" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                <div className="formInput">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="John "
                    name="first_name"
                    value={formData.first_name}
                    className="focus:outline-0"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="formInput">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Mukisa"
                    name="last_name"
                    value={formData.last_name}
                    className="focus:outline-0"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="formInput">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    name="username"
                    value={formData.username}
                    className="focus:outline-0"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="formInput">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="Johndoe@gmail.com"
                    name="email"
                    value={formData.email}
                    className="focus:outline-0"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="formInput">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+256 705040406"
                    name="phone_number"
                    value={formData.phone_number}
                    className="focus:outline-0"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="formInput">
                  <label>Office Location</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    name="office_location"
                    value={formData.office_location}
                    className="focus:outline-0"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="formInput">
                  <label>Date Of Birth</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    name="date_of_birth"
                    value={formData.date_of_birth}
                    className="focus:outline-0"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="formInput">
                  <label>Sex</label>
                  <select
                    value={formData.sex}
                    name="sex"
                    onChange={handleInputChange}
                    className="p-2"
                  >
                    <option></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="formInput">
                  <label style={{ margin: "10px" }}>Permisions</label>
                  <select
                    value={formData.user_type}
                    name="user_type"
                    onChange={handleInputChange}
                    className="p-2"
                  >
                    <option></option>
                    <option value="admin">Admin</option>
                    <option value="supervisor">Supervisor</option>
                    <option value="field_agent">Field Agent</option>
                  </select>
                </div>
              </div>

             

              <button
                onClick={() => {
                  // setFormData({ ...formData, username: formData.email });
                  console.log("before", formData);
                  // dispatch(create_user({ token, formData }));
                }}
              >
                {loading ? <Spinner /> : "Submit"}
              </button>
              {/* {message && <p>{message}</p>} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
