// eslint-disable-next-line react/prop-types
const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      name: "Hyderabad",
    },
    {
      id: 2,
      name: "Bangalore",
    },
    {
      id: 3,
      name: "Chennai",
    },
    {
      id: 4,
      name: "Delhi",
    },
    {
      id: 5,
      name: "Mumbai",
    },
    {
      id: 6,
      name: "Pune",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-around gap-4 my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition-transform ease-in
            text-base sm:text-sm md:text-lg lg:text-xl"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
