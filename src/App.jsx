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
import { PersistGate } from "redux-persist/integration/react";
import { persistedStore } from "./features/store";
import { Provider } from "react-redux";
import store from "./features/store";
import ProtectedRoutes from "./ProtectedRoutes";
import Update from "./pages/update/Update";

// import "./App.css";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />

              <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard">
                  <Route index element={<Home />} />

                  <Route path="/dashboard/users">
                    <Route index element={<List type={"user"} />} />
                    <Route path=":userId" element={<Single type={"user"} />} />
                    <Route path="update/:id" element={<Update />} />
                    <Route
                      path="new"
                      element={
                        <New
                          inputs={userInputs}
                          type={"user"}
                          title="Add New User"
                        />
                      }
                    />
                  </Route>

                  <Route path="/dashboard/products">
                    <Route index element={<List type={"job"} />} />
                    <Route
                      path=":productId"
                      element={<Single type={"job"} />}
                    />
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
              </Route>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
