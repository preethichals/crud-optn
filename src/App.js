import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import "./css/sb-admin-2.css";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar></Navbar>
            <Routes>
              <Route path="/Student" element={<Student/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
