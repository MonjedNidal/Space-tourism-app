import { useState } from "react";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import data from "../data/data.json";

function DestinationPage() {
  const [destinationSelector, setDestinationSelector] = useState(0);

  const { destinations } = data;

  const images = [moon, mars, europa, titan];

  return (
    <div
      className={`bg-backgroundDestinationMobile md:bg-backgroundDestinationTablet xl:bg-backgroundDestinationDesktop flex content-center flex-wrap flex-col xl:flex-row h-fit bg-center bg-cover bg-no-repeat pt-28 text-center xl:min-h-screen`}
    >
      <div className="w-screen flex flex-col xl:w-6/12 xl:relative">
        <p className="text-white tracking-widest text-base md:self-start md:text-xl md:tracking-[3.375px] md:pl-8 md:absolute xl:-top-16 xl:left-32  xl:text-[1.75rem] xl:tracking-[4.725px]">
          <span className="opacity-25 mr-3">01</span>
          PICK YOUR DESTINATION
        </p>
        <img
          className="w-7/12 my-8 self-center max-w-sm"
          src={images[destinationSelector]}
          alt=""
        />
      </div>
      <div className="w-full flex flex-col xl:w-6/12">
        <div className="flex justify-around text-textGray tracking-widest w-full px-9 mb-2 md:max-w-md self-center">
          {destinations.map((destination, index) => (
            <p
              key={destination.name}
              className={`py-1 hover:cursor-pointer ${
                index === destinationSelector
                  ? " border-b text-white "
                  : " hover:border-b"
              }`}
              onClick={() => {
                setDestinationSelector(index);
              }}
            >
              {destination.name}
            </p>
          ))}
        </div>
        <h1 className="text-white text-[5rem] font-Bellefair uppercase">
          {destinations[destinationSelector].name}
        </h1>
        <p className="text-textGray px-6 leading-7 md:max-w-md self-center">
          {destinations[destinationSelector].description}
        </p>
        <hr className="text-[#383B4B] w-11/12 self-center my-8" />
        <div className="text-white flex flex-col justify-evenly md:flex-row">
          <div>
            <p className="text-textGray tracking-widest mb-2">AVG. DISTANCE</p>
            <span className="text-3xl font-Bellefair uppercase">
              {destinations[destinationSelector].distance}
            </span>
          </div>
          <div className="p-10 pb-14 md:pt-0">
            <p className="text-textGray tracking-widest mb-2">
              EST. TRAVEL TIME
            </p>
            <span className="text-3xl font-Bellefair uppercase">
              {destinations[destinationSelector].travel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationPage;
