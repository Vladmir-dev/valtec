import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useParams } from "react-router";

const Single = ({ type }) => {
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

  const jobid = useParams();
  console.log("job id", jobid.productId);
  const jobDetail = rows.filter((x) => x.id == jobid.productId);
  console.log("jobs", jobDetail[0]);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            {type === "user" ? (
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt=""
                  className="itemImg"
                />
                <div className="details">
                  <h1 className="itemTitle">Jane Doe</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">janedoe@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+1 2345 67 89</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="item text-[30px]">
                <img src={jobDetail[0].img} alt="" className="itemImg" />
                <div className="details ">
                  <h1 className="itemTitle">{jobDetail[0].name}</h1>
                  <div className="detailItem">
                    <span className="itemKey">Client:</span>
                    <span className="itemValue">{jobDetail[0].client}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Land:</span>
                    <span className="itemValue">{jobDetail[0].land}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Location:</span>
                    <span className="itemValue">{jobDetail[0].location}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Agent:</span>
                    <span className="itemValue">{jobDetail[0].agent}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Supervisor:</span>
                    <span className="itemValue">{jobDetail[0].supervisor}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Date Created:</span>
                    <span className="itemValue">{jobDetail[0].datec}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Date Started:</span>
                    <span className="itemValue">{jobDetail[0].dates}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Status:</span>
                    <span className="itemValue">{jobDetail[0].status}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div> */}
      </div>
    </div>
  );
};

export default Single;
