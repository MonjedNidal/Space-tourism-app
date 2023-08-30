import closeIcon from "../assets/shared/icon-close.svg";
import { Link } from "react-router-dom";

function Sidebar({ openedPage, setOpenedPage, setToggleSidebar, className }) {
  const pages = ["home", "destination", "crew", "technology"];

  return (
    <div
      className={`sidebar  py-10 pl-10 flex flex-col absolute z-50 right-0 h-screen w-8/12 ${className} md:hidden`}
    >
      <div className="flex w-full justify-between mb-20">
        <div></div>
        <img
          className="h-8 hover:cursor-pointer mr-10"
          src={closeIcon}
          onClick={() => {
            setToggleSidebar(false);
          }}
          alt=""
        />
      </div>
      <ul className="text-white">
        {pages.map((page, index) => (
          <li
            key={page}
            className={`text-base font-normal mb-5 uppercase tracking-widest ${
              openedPage !== page ? "" : " border-r-4 "
            }`}
            onClick={() => {
              setOpenedPage(page);
              setToggleSidebar(false);
            }}
          >
            <Link to={`/${page !== "home" ? page : ""}`}>
              <span className="tracking-widest font-bold mr-2">0{index}</span>
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
