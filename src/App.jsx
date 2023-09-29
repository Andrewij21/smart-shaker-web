import { useState } from "react";
import useFetch from "./hooks/useFetch";
function App() {
  const [speed, setSpeed] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const handlePower = async (e) => {
    e.preventDefault();
    console.log("power", isActive);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useFetch("/active", isActive);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("speed", speed);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useFetch("/", speed);
  };
  return (
    <div className="p-20 ">
      <div className="w-50 text-center w-1/2 mx-auto">
        <h1 className="text-5xl">SMART SHACKER</h1>
        <div className="my-24">
          <form onSubmit={handlePower}>
            <p className="text-xl mb-2 ">{isActive ? "ON" : "OFF"}</p>
            <div className="flex justify-center gap-4 ">
              <button
                type="submit"
                className={`focus:bg-blue-600 focus:text-white focus:ring-sky-400 ring ring-slate-400 text-slate-600 py-2 px-4 rounded-md hover:scale-110 ${
                  isActive ? "bg-blue-600 text-white ring-sky-400" : ""
                }`}
                onClick={() => setIsActive(true)}
              >
                ON
              </button>
              <button
                type="submit "
                autoFocus
                className={`focus:bg-blue-600 focus:text-white focus:ring-sky-400 ring ring-slate-400 text-slate-600 py-2 px-4 rounded-md outline-none hover:scale-110  ${
                  !isActive ? "bg-blue-600 text-white ring-sky-400" : ""
                }`}
                onClick={() => setIsActive(false)}
              >
                OFF
              </button>
            </div>
          </form>
        </div>
        <form onSubmit={handleSubmit} className=" ">
          <div className="flex justify-between shadow-2xl shadow-gray-300 p-4  w-96 mx-auto  rounded-lg py-2 px-4 gap-12">
            <div className="mb-3 text-start flex-1">
              <label
                htmlFor="customRange3"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Kecepatan {speed}
              </label>
              <input
                type="range"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                min="0"
                max="255"
                id="customRange3"
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
              ></input>
            </div>
            <div className="">
              <br />
              <button
                type="submit"
                className="bg-blue-600 text-white hover:ring-sky-400 hover:bg-blue-800 ring  py-2 px-4 rounded-md"
              >
                Kirim
              </button>
            </div>
          </div>
          {/* <label htmlFor="">input kecepatan</label>
        <br />
        <input
          type="number"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">ok</button> */}
        </form>
      </div>
    </div>
  );
}

export default App;
