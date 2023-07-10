import { useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import FieldJobs from "./components/fieldjobs/FieldJobs";
import SingleJob from "./components/singleJob/SingleJob";
// import "./App.css";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard">
            <Route index element={<Home />} />

            <Route path="/dashboard/users">
              <Route index element={<List type={"user"} />} />
              <Route path=":userId" element={<Single type={"user"} />} />
              <Route
                path="new"
                element={
                  <New inputs={userInputs} type={"user"} title="Add New User" />
                }
              />
            </Route>

            <Route path="/dashboard/products">
              <Route index element={<List type={"job"} />} />
              <Route path=":productId" element={<Single type={"job"} />} />
              <Route
                path="new"
                element={
                  <New
                    inputs={productInputs}
                    type={"job"}
                    title="Add New Job"
                  />
                }
              />
            </Route>

            {/* <Route path="jobs">
              <Route index element={<FieldJobs />} />
              <Route path=":jobID" element={<SingleJob />} />
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
