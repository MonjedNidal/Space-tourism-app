import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import { Link } from "react-router-dom";
function Navbar({ openedPage, setOpenedPage, setToggleSidebar }) {
  const pages = ["home", "destination", "crew", "technology"];
  return (
    <div className="absolute flex justify-between flex-wrap content-center w-screen w-fill p-8 md:pl-8 md:pt-0 md:pr-0">
      <Link
        onClick={() => {
          setOpenedPage("home");
        }}
        to={`/`}
      >
        <img
          className="h-10 md:mt-8"
          width={"40px"}
          height={"40px"}
          src={logo}
          alt=""
        />
      </Link>

      <img
        className="h-8 pt-1 hover:cursor-pointer md:hidden"
        src={hamburger}
        width={"32px"}
        height={"32px"}
        onClick={() => {
          setToggleSidebar((toggleSidebar) => !toggleSidebar);
        }}
        alt=""
      />
      <div className="navbar w-fit justify-between h-fit bg-white absolute top-0 right-0 text-white tracking-widest hidden md:flex xl:px-20">
        {pages.map((page, index) => (
          <Link
            key={page}
            onClick={() => {
              setOpenedPage(page);
            }}
            to={`/${page !== "home" ? page : ""}`}
          >
            <p
              className={`uppercase py-8 mx-8 hover:cursor-pointer ${
                openedPage === page
                  ? "border-b"
                  : "hover:border-b hover:border-b-[rgba(255,255,255,0.5)]"
              }`}
            >
              <span className="mr-2 tracking-widest font-bold">
                0{index + 1}
              </span>
              {page}
            </p>
          </Link>
        ))}
        <hr className="text-white hidden absolute w-full top-2/4 -left-[95%] opacity-[0.2515] xl:inline-block" />
      </div>
    </div>
  );
}

export default Navbar;
