import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
// eslint-disable-next-line react/prop-types
const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6 items-center">
      <div className="flex flex-row items-center justify-center sm:space-x-2 md:space-x-4 lg:space-x-6
        w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="search by city..."
          className="text-gray-500 text-base sm:text-lg md:text-xl font-light p-2 w-full
            shadow-xl capitalize focus:outline-none
            placeholder:lowercase placeholder:text-[10px] sm:placeholder:text-sm
            sm:w-3/4 md:w-1/2 lg:w-1/3"
        />
        <BiSearch
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <BiCurrentLocation
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>
      {/**Makes the container take the full width on smaller screens and only 1/4 width on larger screens.*/}
      <div className="flex flex-row items-center justify-center w-full sm:w-1/4">
        <button
          className="text-xl sm:text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => setUnits("metric")}
        >
          ℃
        </button>
        <p className="text-xl sm:text-2xl font-medium mx-2">|</p>
        <button
          className="text-xl sm:text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => setUnits("imperial")}
        >
          ℉
        </button>
      </div>
    </div>
  );
};

export default Inputs;
