import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
// import { clientdet } from "../../formSource";
import { useSelector, useDispatch } from "react-redux";
import { create_user, create_job } from "../../features/jobs/jobActions";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

const New = ({ inputs, title, type }) => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.job.users);
  const message = useSelector((state) => state.job.message);
  const loading = useSelector((state) => state.job.isLoading);
  const token = useSelector((state) => state.user.token);

  let data;

  if (type === "job") {
    data = {
      name: "",
      location: "",
      distance: "",
      land_name: "",
      admin_request: "",
      field_agent: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      client_request: "",
    };
  } else {
    data = {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      office_location: "",
      date_of_birth: "",
      sex: "",
      user_type: "",
      username: "",
      password: "@centari2",
    };
  }

  const [formData, setFormData] = useState(data);
  console.log(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Do something with the form data, like sending it to the backend
  };

  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            {type === "user" ? (
              <form style={{ display: "flex", flexDirection: "c" }}>
                {/* <div className="formInput">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                    className="focus:outline-0"
                  />
                </div> */}

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

                <div>
                  {/* {type === "user" && (
                  
                )} */}
                </div>

                <button
                  onClick={() => {
                    // setFormData({ ...formData, username: formData.email });
                    console.log("before", typeof formData);
                    dispatch(create_user({ token, formData }));
                  }}
                >
                  {loading ? <Spinner /> : "Submit"}
                </button>
                {message && <p>{message}</p>}
              </form>
            ) : (
              <form>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                  <div className="formInput">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="jon name"
                      name="name"
                      value={formData.name}
                      className="focus:outline-0"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="formInput">
                    <label>Location</label>
                    <input
                      type="text"
                      placeholder="200 km"
                      name="location"
                      value={formData.location}
                      className="focus:outline-0"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="formInput">
                    <label>Distance</label>
                    <input
                      type="text"
                      placeholder="200 km"
                      name="distance"
                      value={formData.distance}
                      className="focus:outline-0"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="formInput">
                    <label>Land Name</label>
                    <input
                      type="text"
                      placeholder="kikuubo land"
                      name="land_name"
                      value={formData.land_name}
                      className="focus:outline-0"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="formInput">
                    <label>Admin's Request</label>
                    <input
                      type="text"
                      placeholder="Male"
                      name="admin_request"
                      value={formData.admin_request}
                      className="focus:outline-0"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="formInput">
                    <label>Agent</label>
                    <select name="field_agent" onChange={handleInputChange} className="">
                      <option></option>
                      {users.map((item, index) => {
                        if (item.user_type !== "field_agent") {
                          return null;
                        }
                        return (
                          <option value={item.username}>{item.email}</option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="formInput">
                    <label>Supervisor</label>
                    <select name="supervisor" onChange={handleInputChange} className="">
                      <option></option>

                      {users.map((item, index) => {
                        if (item.user_type !== "supervisor") {
                          return null;
                        }
                        return (
                          <option value={item.username}>{item.email}</option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className="formInput" style={{ width: "100%" }}>
                  <h1>Client Details</h1>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "20px",
                      marginTop: "10px",
                    }}
                  >
                    <div className="formInput">
                      <label>First Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
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
                        placeholder="John Doe"
                        name="last_name"
                        value={formData.last_name}
                        className="focus:outline-0"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="formInput">
                      <label>Email</label>
                      <input
                        type="text"
                        placeholder="John Doe"
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
                        placeholder="John Doe"
                        name="phone"
                        value={formData.phone}
                        className="focus:outline-0"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="formInput">
                      <label>Client Request</label>
                      <input
                        type="text"
                        name="client_request"
                        placeholder="John Doe"
                        value={formData.client_request}
                        className="focus:outline-0"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    // setFormData({ ...formData, username: formData.email });
                    console.log("before", typeof formData);
                    dispatch(create_job({ token, formData }));
                  }}
                >
                  {loading ? <Spinner /> : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
