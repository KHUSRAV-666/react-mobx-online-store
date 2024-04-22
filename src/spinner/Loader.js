const Loader = () => {
  return (
    <div className="absolute bg-[#1b1b1b7e] top-0 left-0 w-full h-[100%] flex justify-center z-0 items-center overflow-y-hidden">
      <img
        width={80}
        height={80}
        src={require("../spinner/loading-icon.gif")}
        alt="spinner"
      />
    </div>
  );
};

export default Loader;
