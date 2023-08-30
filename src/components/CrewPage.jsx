import { useState } from "react";
import data from "../data/data.json";
import douglas from "../assets/crew/image-douglas-hurley.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
function CrewPage() {
  const [crewSelector, setCrewSelector] = useState(0);
  const { crew } = data;
  const images = [douglas, anousheh, mark, victor];

  return (
    <div className="min-h-screen flex flex-col content-center flex-wrap bg-backgroundCrewMobile md:bg-backgroundCrewTablet xl:bg-backgroundCrewDesktop  pt-28 bg-no-repeat bg-center bg-cover text-center xl:flex-row  xl:justify-between xl:text-start">
      <p className="text-white tracking-widest text-base uppercase md:self-start md:pl-8 md:text-xl md:absolute xl:inline-block xl:text-[1.75rem] xl:tracking-[4.725px]">
        <span className="opacity-25 mr-3 xl:text-[1.75rem]">02</span>
        Meet your crew
      </p>
      <div className="w-screen flex flex-col content-center flex-wrap xl:w-6/12 xl:justify- xl:h-full md:flex-col-reverse md:justify-between xl:justify-evenly">
        <div className="flex flex-col md:flex-col-reverse xl:jus">
          <div className="flex flex-col justify-center w-full md:max-h-[650px] ">
            <img
              className="w-fit mt-12 self-center h-64 md:w-8/12 xl:hidden "
              src={images[crewSelector]}
              alt=""
            />
            <hr className="text-[#383B4B] w-11/12 self-center md:hidden" />
          </div>
          <div className="flex self-center justify-between my-14 w-20 xl:hidden">
            {crew.map((member, index) => (
              <div
                key={member.name}
                className={`w-[10px] h-[10px] bg-white rounded-full opacity-[0.174363] hover:opacity-50 hover:cursor-pointer ${
                  index === crewSelector
                    ? " opacity-[1] hover:opacity-[1] "
                    : ""
                }`}
                onClick={() => {
                  setCrewSelector(index);
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className="md:pt-14 xl:hidden">
          <span className="uppercase font-Bellefair text-white opacity-50 font-normal md:text-xl xl:text-[2rem]">
            {crew[crewSelector].role}
          </span>
          <h2 className="text-2xl my-2 text-white font-Bellefair uppercase md:text-[40px] md:my-4 xl:text-[56px]">
            {crew[crewSelector].name}
          </h2>
          <p className="text-textGray px-8 max-w-lg md:leading-7 xl:p-0 xl:text-[18px]">
            {crew[crewSelector].bio}
          </p>
        </div>
      </div>
      <div className="hidden w-screen justify-evenly content-center flex-wrap xl:flex">
        <div className="pt-14 w-5/12 flex flex-col justify-around">
          <div>
            <span className="uppercase font-Bellefair text-white opacity-50 font-normal md:text-xl xl:text-[2rem]">
              {crew[crewSelector].role}
            </span>
            <h2 className="text-2xl my-2 text-white font-Bellefair uppercase md:text-[40px] md:my-4 xl:text-[56px] xl:my-6">
              {crew[crewSelector].name}
            </h2>
            <p className="text-textGray px-8 max-w-lg md:leading-7 xl:p-0 xl:text-[18px]">
              {crew[crewSelector].bio}
            </p>
          </div>
          <div className="flex self-center justify-between my-14 w-20">
            {crew.map((member, index) => (
              <div
                key={member.name}
                className={`w-[10px] h-[10px] bg-white rounded-full opacity-[0.174363] hover:opacity-50 hover:cursor-pointer ${
                  index === crewSelector
                    ? " opacity-[1] hover:opacity-[1] "
                    : ""
                }`}
                onClick={() => {
                  setCrewSelector(index);
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className="flex content-center flex-wrap justify-center relative h-auto w-5/12">
          <img
            className="w-fit mt-12 self-center h-8/12 hidden md:w-8/12 xl:inline-block"
            src={images[crewSelector]}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default CrewPage;
