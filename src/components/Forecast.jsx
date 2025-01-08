/* eslint-disable react/prop-types */

const Forecast = ({ title, data }) => {
  return (
    <div >
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium uppercase text-sm sm:text-base md:text-sm">{title}</p>
      </div>
      <hr className="my-1" />
      <div className="flex items-center justify-between flex-wrap">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-xs sm:text-sm md:text-md lg:text-xl">{item.title}</p>
            <img src={item.icon} alt="weather icon" className="w-8 sm:w-12 my-1" />
            <p className="font-medium text-xs sm:text-sm md:text-md lg:text-xl">{item.temp.toFixed()}º</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
