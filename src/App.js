import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MyRoutes from "./components/MyRoutes";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
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
      <div className="app min-h-full font-BarlowCondensed w-screen">
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
        <MyRoutes setOpenedPage={setOpenedPage} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
