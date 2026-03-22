import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Current from "./components/Current/Current";
import { useDispatch, useSelector } from "react-redux";
import { getLatLon, weatherSelector } from "./store/weather/weatherSlice";
import Week from "./components/Week/Week";
const App = () => {
  const { data } = useSelector(weatherSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLatLon("tashkent"));
  }, []);

  return (
    <>
      {data ? (
        <div className="wrapper">
          <div className="container">
            <Navbar />
            <main className="main">
              <Current />
              <Week />
            </main>
          </div>
        </div>
      ) : (
        <h1>Загрузка</h1>
      )}
    </>
  );
};

export default App;
