import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import CrewPage from "./components/CrewPage";
import DestinationPage from "./components/DestinationPage";
import TechnologyPage from "./components/TechnologyPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [openedPage, setOpenedPage] = useState(
    localStorage.getItem("openedPage")
      ? localStorage.getItem("openedPage")
      : "home"
  );

  useEffect(() => {
    localStorage.setItem("openedPage", openedPage);
    console.log(openedPage);
  }, [openedPage]);

  return (
    <BrowserRouter>
      <div className="app  h-fit font-BarlowCondensed w-screen">
        <Navbar
          openedPage={openedPage}
          setOpenedPage={setOpenedPage}
          setToggleSidebar={setToggleSidebar}
        />
        <Sidebar
          openedPage={openedPage}
          setOpenedPage={setOpenedPage}
          setToggleSidebar={setToggleSidebar}
          className={
            toggleSidebar ? " -translate-x " : " translate-x-full hidden"
          }
        />
        <Routes>
          <Route
            path="/"
            exact
            element={<Home setOpenedPage={setOpenedPage} />}
          />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
