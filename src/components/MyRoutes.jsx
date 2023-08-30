import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CrewPage from "./CrewPage";
import DestinationPage from "./DestinationPage";
import TechnologyPage from "./TechnologyPage";

function MyRoutes({ setOpenedPage }) {
  return (
    <Routes>
      <Route path="/" exact element={<Home setOpenedPage={setOpenedPage} />} />
      <Route path="/destination" element={<DestinationPage />} />
      <Route path="/crew" element={<CrewPage />} />
      <Route path="/technology" element={<TechnologyPage />} />
    </Routes>
  );
}

export default MyRoutes;
