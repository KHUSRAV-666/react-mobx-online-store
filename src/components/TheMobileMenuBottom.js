import { useLocation, useNavigate } from "react-router-dom";
import BaseIcon from "./BaseIcon.js";
import {
  BASKET_ROUTE,
  CATALOG_ROUTE,
  FAVORITE_ROUTE,
  SHOP_ROUTE,
  USER_ROUTE,
} from "../utils/consts/routes_link";

const TheMobileMenuBottom = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const titleMenu = ["text-[.7rem] text-white"];
  const itemMenu = ["flex flex-col items-center justify-center"];

  return (
    <div className="fixed bottom-0 w-full bg-x_neutral-800 z-20 flex justify-between items-center px-4 py-1">
      <div
        className={`${itemMenu} ${
          location === "/" ? "opacity-100" : "opacity-50"
        }`}
        onClick={() => navigate(SHOP_ROUTE)}
      >
        <BaseIcon name="mobile_home" size="27" fill_color="white" />
        <p className={`${titleMenu}`}>Главная</p>
      </div>
      <div
        className={`${itemMenu} ${
          location === "/catalog" ? "opacity-100" : "opacity-50"
        }`}
        onClick={() => navigate(CATALOG_ROUTE)}
      >
        <BaseIcon name="mobile_catalog" size="27" fill_color="white" />
        <p className={`${titleMenu}`}>Каталог</p>
      </div>
      <div
        className={`${itemMenu} ${
          location === "/favorite" ? "opacity-100" : "opacity-50"
        }`}
        onClick={() => navigate(FAVORITE_ROUTE)}
      >
        <BaseIcon name="mobile_favorite" size="27" fill_color="white" />
        <p className={`${titleMenu}`}>Избранное</p>
      </div>
      <div
        className={`${itemMenu} ${
          location.includes("/user") ? "opacity-100" : "opacity-50"
        }`}
        onClick={() => navigate(USER_ROUTE)}
      >
        <BaseIcon name="mobile_profile" size="27" fill_color="white" />
        <p className={`${titleMenu}`}>Профиль</p>
      </div>
      <div
        className={`${itemMenu} ${
          location === "/basket" ? "opacity-100" : "opacity-50"
        }`}
        onClick={() => navigate(BASKET_ROUTE)}
      >
        <BaseIcon name="mobile_cart" size="27" fill_color="white" />
        <p className={`${titleMenu}`}>Корзина</p>
      </div>
    </div>
  );
};

export default TheMobileMenuBottom;
