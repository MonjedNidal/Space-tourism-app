import { Link } from "react-router-dom";
function Home({ setOpenedPage }) {
  return (
    <div className="flex flex-col xl:flex-row text-center xl:text-start justify-evenly content-center flex-wrap pt-28 bg-backgroundHomeMobile md:bg-backgroundHomeTablet xl:bg-backgroundHomeDesktop min-h-screen bg-no-repeat bg-center bg-cover overflow-y-hidden xl:justify-around xl:">
      <div>
        <p className="text-textGray uppercase tracking-widest md:text-[1.25rem] md:tracking-[0.21094rem] xl:text-lg xl:tracking-[4.725px]">
          So, you want to travel to
        </p>
        <h1 className="text-white text-[5rem] font-Bellefair my-6 md:text-[9.375rem]">
          SPACE
        </h1>
        <p className="text-textGray mb-6 px-6 xl:pl-0 max-w-md md:leading-[1.75rem] xl:leading-8	xl:text-[1.125rem]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link
        className="w-fit h-fit md:my-16 rounded-full self-center"
        onClick={() => setOpenedPage("destination")}
        to={"/destination"}
      >
        <h3 className="h-[150px] w-[150px] md:h-[242px] md:w-[242px] xl:h-[274px] xl:w-[274px] md:text-[32px]   flex justify-center content-center flex-wrap tracking-widest font-Bellefair rounded-full bg-white hover:shadow-max hover:cursor-pointer ">
          EXPLORE
        </h3>
      </Link>
    </div>
  );
}

export default Home;
