const Loader = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className={`h-5 w-5 rounded-full bg-cyan-500 ${
            index !== 4 ? "mr-2" : ""
          } animate-pulse`}
        />
      ))}
    </section>
  );
};

export default Loader;
