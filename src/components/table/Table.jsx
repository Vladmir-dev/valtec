import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

const List = () => {
  const jobs = useSelector((state) => state.job.jobs)
  
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      supervisor: "Paul Smith",
      client: "James Able",
      date: "1 March",
      date_started: "1 March",
      status: "Accepted",
      amount: "7858489",
      distance:"200km",
      method: "Cash on Delivery",
      
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      supervisor: "Paul Smith",
      client: "James Able",
      date: "1 March",
      date_started: "1 March",
      status: "Pending",
      amount: "7858489",
      distance:"200km",
      method: "Cash on Delivery",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      supervisor: "Paul Smith",
      client: "James Able",
      date: "1 March",
      date_started: "1 March",
      status: "Progress 20%",
      amount: "7858489",
      distance:"200km",
      method: "Cash on Delivery",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      supervisor: "Paul Smith",
      client: "James Able",
      date: "1 March",
      date_started: "1 March",
      status: "Accepted",
      amount: "7858489",
      distance:"200km",
      method: "Cash on Delivery",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      supervisor: "Paul Smith",
      client: "James Able",
      date: "1 March",
      date_started: "1 March",
      status: "Pending",
      amount: "7858489",
      distance:"200km",
      method: "Cash on Delivery",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell className="tableCell">Job ID</TableCell>
            <TableCell className="tableCell">Job Name</TableCell>
            <TableCell className="tableCell">Field Agent</TableCell>
            <TableCell className="tableCell">Supervisor</TableCell>
            <TableCell className="tableCell">Client</TableCell>
            <TableCell className="tableCell">Date Created</TableCell>
            <TableCell className="tableCell">Date Started</TableCell>
            <TableCell className="tableCell">Job Status</TableCell>
            <TableCell className="tableCell">Location</TableCell>
            <TableCell className="tableCell">Distance</TableCell>
            <TableCell className="tableCell">Land</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.supervisor}</TableCell>
              <TableCell className="tableCell">{row.field_agent}</TableCell>
              <TableCell className="tableCell">{row.date_created}</TableCell>
              <TableCell className="tableCell">{row.date_started}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">{row.location}</TableCell>
              <TableCell className="tableCell">{row.distance}</TableCell>
              <TableCell className="tableCell">{row.land}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
