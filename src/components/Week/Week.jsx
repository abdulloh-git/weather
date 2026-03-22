import React from "react";
import Day from "./Day";
import s from "./Week.module.scss";
import { useSelector } from "react-redux";
import { weatherSelector } from "../../store/weather/weatherSlice";
const Week = () => {
  const { data } = useSelector(weatherSelector);
  return (
    <>
      <div className={s.daily}>
        {data?.daily?.map((item, i) => (
          <Day key={i} day={item} />
        ))}
      </div>
    </>
  );
};

export default Week;
