import { useState } from "react";
import vehicle from "../assets/technology/image-launch-vehicle-landscape.jpg";
import capsule from "../assets/technology/image-space-capsule-landscape.jpg";
import spaceport from "../assets/technology/image-spaceport-landscape.jpg";
import portraitVehicle from "../assets/technology/image-launch-vehicle-portrait.jpg";
import portraitCapsule from "../assets/technology/image-space-capsule-portrait.jpg";
import portraitSpaceport from "../assets/technology/image-spaceport-portrait.jpg";
import data from "../data/data.json";
function TechnologyPage() {
  const [techCounter, setTechCounter] = useState(0);
  const images = [vehicle, capsule, spaceport];
  const portraitImages = [portraitVehicle, portraitCapsule, portraitSpaceport];
  const { technology } = data;

  return (
    <div className="bg-backgroundTechnologyMobile md:bg-backgroundTechnologyTablet xl:bg-backgroundTechnologyDesktop flex flex-col h-fit min-h-screen overflow-x-hidden pt-28 bg-no-repeat bg-center bg-cover text-center xl:flex-row xl:justify-between">
      <p className="text-white tracking-widest text-base uppercase md:self-start md:pl-8 md:text-xl xl:text-[1.75rem] xl:tracking-[4.725px]">
        <span className="opacity-25 mr-3 ">03</span>
        Space launch 101
      </p>
      <img
        className="my-7 max-h-64 w-full xl:hidden"
        src={images[techCounter]}
        alt=""
      />
      <div className="flex flex-col w-screen xl:flex-row xl:w-4/12">
        <div className="flex self-center w-40 md:w-56 justify-between font-Bellefair xl:flex-col xl:h-72 xl:w-fit xl:mr-14 xl:text-[2rem]">
          {technology.map((tech, index) => (
            <h5
              key={tech.name}
              className={`w-10 h-10 md:w-[3.75rem] md:h-[3.75rem] xl:h-[5rem] xl:w-[5rem] rounded-full border  border-[rgba(255,255,255,0.25)] hover:border-white hover:cursor-pointer flex justify-center content-center flex-wrap tracking-[0.0625rem] md:tracking-[0.09375rem] md:text-[1.5rem] ${
                techCounter === index ? " text-textDark bg-white" : "text-white"
              }`}
              onClick={() => {
                setTechCounter(index);
              }}
            >
              {index + 1}
            </h5>
          ))}
        </div>
        <div className="flex flex-col xl:w-fit xl:text-start self-center">
          <p className="uppercase tracking-[0.14763rem] font-[0.875rem] text-textGray mt-6 ml-1 xl:ml-0">
            the terminology...
          </p>
          <h2 className="text-2xl text-white font-Bellefair uppercase mt-1 mb-3 md:text-[2.5rem] md:my-4 xl:text-[3.5rem] xl:my-3 xl:w-fit xl:leading-[3.3rem]">
            {technology[techCounter].name}
          </h2>
          <p className="text-textGray px-8 mb-8 max-w-md self-center xl:p-0 xl:text-[1.125rem] leading-[1.5625rem] md:leading-[1.75rem] xl:leading-[2rem]">
            {technology[techCounter].description}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap content-center w-5/12">
        <img
          className="hidden  max-h-[43rem] self-end w-full h-full xl:inline-block"
          src={portraitImages[techCounter]}
          alt=""
        />
      </div>
    </div>
  );
}

export default TechnologyPage;
