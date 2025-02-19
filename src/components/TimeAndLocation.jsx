const TimeAndLocation = (weather) => {
  const {
    weather: { formattedLocalTime, name, country },
  } = weather;

  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-sm sm:text-md md:text-xl font-extralight">{formattedLocalTime}</p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-sm sm:text-md md:text-xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
