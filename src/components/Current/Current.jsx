import React from "react";
import s from "./Current.module.scss";
import { presip, pressure, sun, temp, wind } from "../../utils/reExport";
import { useSelector } from "react-redux";
import { weatherSelector } from "../../store/weather/weatherSlice";
import { getTime } from "../../utils/getTime";

const Current = () => {
  const { data } = useSelector(weatherSelector);
  console.log(data);
  const degree = Math.round(data.current.temp);
  const city = data.city;
  const time = getTime(data.timezone);
  const items = [
    {
      img: temp,
      title: "Температура",
      desc: `${degree}° - ощущается как ${Math.round(
        data.current.feels_like
      )}°`,
    },
    {
      img: pressure,
      title: "Давление ",
      desc: `${data.current.pressure} мм ртутного столба `,
    },
    {
      img: presip,
      title: "Облачность",
      desc: `${data.current.clouds}%`,
    },
    {
      img: wind,
      title: "Ветер",
      desc: `${data.current.wind_speed}м/с `,
    },
  ];
  return (
    <>
      <section className={s.current}>
        <div className={s.current__left}>
          <p className={s.current__left_degree}>{degree}°</p>
          <p className={s.current__left_today}>Cегодня</p>
          <p className={s.current__left_time}>Время: {time}</p>
          <p className={s.current__left_city}>Город: {city}</p>
          <img src={sun} alt="" className={s.current__left_img} />
        </div>
        <div className={s.current__right}>
          {items.map((item) => (
            <div className={s.current__right_item} key={item.title}>
              <div className={s.current__right_item_img}>
                <img src={item.img} alt="" />
              </div>
              <p className={s.current__right_item_title}>{item.title}</p>
              <p className={s.current__right_item_desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Current;
