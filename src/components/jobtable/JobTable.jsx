// import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.scss";

const JobTable = () => {
  const userColumns = [
    { field: "id", headerName: "Job ID", width: 70 },
    {
      field: "name",
      headerName: "Job Name",
      width: 230,
      //   renderCell: (params) => {
      //     return (
      //       <div className="cellWithImg">
      //         <img className="cellImg" src={params.row.img} alt="avatar" />
      //         {params.row.username}
      //       </div>
      //     );
      //   },
    },
    {
      field: "agent",
      headerName: "Field Agent",
      width: 230,
    },

    {
      field: "supervisor",
      headerName: "Supervisor",
      width: 100,
    },
    {
      field: "client",
      headerName: "Client",
      width: 160,
    },
    {
      field: "datec",
      headerName: "Date Created",
      width: 100,
    },
    {
      field: "dates",
      headerName: "Date Started",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return (
          <div className={`status ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
    {
      field: "location",
      headerName: "Location",
      width: 100,
    },
    {
      field: "distance",
      headerName: "Distance",
      width: 100,
    },
    {
      field: "land",
      headerName: "Land",
      width: 100,
    },
  ];

  const rows = [
    {
      id: 1143155,
      name: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      agent: "John Smith",
      supervisor: "Paul Smith",
      client: "James Able",
      datec: "1 March",
      dates: "1 March",
      status: "Accepted",
      location: "48.856614/2.352221",
      distance: "200km",
      land: "Cash on Delivery",
    },
    {
      id: 2235235,
      name: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      agent: "Michael Doe",
      supervisor: "Paul Smith",
      client: "James Able",
      datec: "1 March",
      dates: "1 March",
      status: "Pending",
      location: "48.856614/2.352221",
      distance: "200km",
      land: "Cash on Delivery",
    },
    {
      id: 2342353,
      name: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      agent: "John Smith",
      supervisor: "Paul Smith",
      client: "James Able",
      datec: "1 March",
      dates: "1 March",
      status: "Progress 20%",
      location: "48.856614/2.352221",
      distance: "200km",
      land: "Cash on Delivery",
    },
    {
      id: 2357741,
      name: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      agent: "Jane Smith",
      supervisor: "Paul Smith",
      client: "James Able",
      datec: "1 March",
      dates: "1 March",
      status: "Accepted",
      location: "48.856614/2.352221",
      distance: "200km",
      land: "Cash on Delivery",
    },
    {
      id: 2342355,
      name: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      agent: "Harold Carol",
      supervisor: "Paul Smith",
      client: "James Able",
      datec: "1 March",
      dates: "1 March",
      status: "Pending",
      location: "48.856614/2.352221",
      distance: "200km",
      land: "Cash on Delivery",
    },
  ];

  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/products/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Job
        <Link to="/products/new" className="link">
          Add New
        </Link>
      </div>
      <div style={{ height: 800, width: "90vw" }}>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default JobTable;
