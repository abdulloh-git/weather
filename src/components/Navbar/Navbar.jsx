import React, { useRef, useState } from "react";
import nav from "./Navbar.module.scss";
import { drop, logo } from "../../utils/reExport";
import { getLatLon } from "../../store/weather/weatherSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const inputCity = useRef(null);
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatch(getLatLon(city));
    inputCity.current.value = "";
    setCity("");
  };
  const inputHandler = () => {
    setCity(inputCity.current.value);
  };

  return (
    <>
      <nav className={nav.nav}>
        <a href="#" className={nav.logo}>
          <img src={logo} alt="" />
          <span className={nav.logo__span}>React weather</span>
        </a>
        <div className={nav.nav__search}>
          <img src={drop} alt="" style={{ cursor: "pointer" }} />
          <form className="nav__search_form" onSubmit={(e) => submit(e)}>
            <input
              type="text"
              className={nav.nav__search_form_input}
              placeholder="Выбрать город"
              ref={inputCity}
              onChange={() => inputHandler()}
            />
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
