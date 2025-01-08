/* eslint-disable react/prop-types */
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const TempAndDetails = ({ weather, units }) => {
  const {
    feels_like,
    humidity,
    speed,
    sunrise,
    sunset,
    temp_min,
    temp_max,
    temp,
    details,
    icon,
  } = weather;

  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${feels_like.toFixed()}º`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()} ${units === "metric" ? "m/s" : "mi/h"}`,
    },
  ];

  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: sunrise,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: sunset,
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed()}º`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()}º`,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-lg sm:text-xl text-cyan-300">
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-between py-3">
        <img src={icon} alt="weather icon" className="w-16 sm:w-20" />
        <p className="text-3xl sm:text-4xl md:text:5xl">{temp.toFixed()}º</p>
        <div className="flex flex-col space-y-3 items-start">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div
              key={id}
              className="flex font-light text-xs sm:text-sm items-center justify-center"
            >
              <Icon size={18} className="mr-1" />
              {title}: <span className="font-medium ml-1">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-10 text-sm sm:text-base md:text-lg lg:text-xl py-3 sm:py-4">
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex flex-row items-center">
            <Icon size={30} />
            <p className="font-light ml-1 text-xs sm:text-sm md:text-base lg:text-lg">
              {title}: <span className="font-medium ml-1">{value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempAndDetails;
