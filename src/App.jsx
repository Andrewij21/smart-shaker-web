import { useState } from "react";
import useFetch from "./hooks/useFetch";
function App() {
  const [speed, setSpeed] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const handlePower = async (e) => {
    e.preventDefault();
    await useFetch("/active", isActive);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log({ speed });
    await useFetch("/", speed);
  };
  return (
    <div className="container d-flex justify-content-center">
      <div className="w-50 text-center">
        <h1>SMART SHACKER</h1>
        <div className="div my-5 ">
          <form onSubmit={handlePower}>
            <p>{isActive ? "ON" : "OFF"}</p>
            <div className="d-flex justify-content-center gap-3 ">
              <button
                type="submit"
                className={
                  isActive ? "btn btn-primary" : "btn btn-outline-primary"
                }
                onClick={() => setIsActive(true)}
              >
                ON
              </button>
              <button
                type="submit  "
                className={
                  !isActive ? "btn btn-primary" : "btn btn-outline-primary"
                }
                onClick={() => setIsActive(false)}
              >
                OFF
              </button>
            </div>
          </form>
        </div>
        <form onSubmit={handleSubmit} className="p-4">
          <div className="row">
            <div className="col-6 mb-3 text-start">
              {/* <label for="exampleInputEmail1" class="form-label">
                Atur kececpatan
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
              /> */}
              <label htmlFor="customRange3" className="form-label">
                Kecepatan {speed}
              </label>
              <input
                type="range"
                className="form-range"
                min="0"
                max="255"
                id="customRange3"
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
              ></input>
            </div>
            <div className="col-6">
              <br />
              <button type="submit" className="btn btn-primary btn-md">
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
