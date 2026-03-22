import React from "react";
import s from "./Week.module.scss";
import { getDate } from "../../utils/getDate";
const Day = ({ day, i }) => {
  const tempMax = Math.round(day?.temp?.max);
  const tempMin = Math.round(day?.temp?.min);
  const { description, icon } = day.weather[0];
  const weekDay =
    i == 0 ? "Today" : i == 1 ? "Tomorrow" : getDate(day.dt, "week");
  const monthDay = getDate(day.dt, "week");
  const month = getDate(day.dt, "month");
  return (
    <div className={s.daily__item}>
      <p className={s.daily__item_day}>{weekDay}</p>
      <p className={s.daily__item_date}>
        {monthDay} {month}
      </p>
      <img
        src={`	https://openweathermap.org/payload/api/media/file/${icon}.png`}
        alt=""
        className={s.daily__item_img}
      />
      <p className={s.daily__item_temp}>{tempMax}°</p>
      <p className={s.daily__item_feels}>{tempMin}°</p>
      <p className={s.daily__item_feels}>{description}</p>
    </div>
  );
};

export default Day;
