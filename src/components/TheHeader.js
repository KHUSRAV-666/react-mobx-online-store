import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext.js";
import { BASKET_ROUTE, SHOP_ROUTE } from "../utils/consts/routes_link";
import BaseIcon from "./BaseIcon.js";
import TheBurgerMenuIcon from "./TheBurgerMenuIcon.js";
import BaseLogo from "./BaseLogo.js";
import useModal from "../hooks/useModal.js";
import CategoryTree from "./Tree/CategoryTree.js";

const TheHeader = () => {
  // open close productModal
  const categoryTreeModal = useModal();
  const { basket } = useContext(AppContext);
  const navigate = useNavigate();
  const toggleMenuState = (e) => {
    categoryTreeModal.toggle();
    // чтобы клик не распространялся на другие элм и сразуже на закрывалось меню
    e.stopPropagation();
  };

  const iconClasses =
    "ml-3 max-lg:ml-2 flex flex-col items-center text-[0.8em] max-lg:text-[0.6em] text-x_neutral-300 hover:text-white cursor-pointer slow_transition_300 hover:no-underline";
  const iconSize = "max-lg:w-[22px] max-lg:h-[22px]";
  const iconTitleCls = "text-[1em] leading-none";

  return (
    <div>
      <header className="bg-x_indigo-800 max-h-16 flex items-center py-[10px] sticky top-0 z-10 mb-3">
        <nav className="main_container relative grid grid-cols-[50px_1fr_50px] max-lg:grid-cols-[50px_1fr_50px] max-sm:grid-cols-[35px_1fr_35px] items-center">
          {/* // Menu Icon ================================================= */}
          <TheBurgerMenuIcon
            toggleMenuState={toggleMenuState}
            categoryTreeModal={categoryTreeModal}
          />
          {/* ПОДКЛЮЧАЕМ ДЕРЕВО КАТЕГОРИИ ================================================================= */}
          <CategoryTree categoryTreeModal={categoryTreeModal} />
          {/* LOGO ================================================== */}
          <NavLink className="mx-auto" to={SHOP_ROUTE}>
            <BaseLogo />
          </NavLink>
          {/* SEARCH ================================================ */}

          <div className="flex justify-end">
            <div
              className={`${iconClasses} ${"relative"}`}
              onClick={() => navigate(BASKET_ROUTE)}
            >
              <i
                className={
                  basket?.count
                    ? "absolute bg-x_orange-600 w-[16px] max-lg:w-[15px] h-[16px] max-lg:h-[15px] rounded-full pr-[1px] right-[1px] -top-1 text-[.9em] max-lg:text-[.8em] text-white flex items-center justify-center"
                    : "hidden"
                }
              >
                {basket?.count}
              </i>
              <BaseIcon name="basket" size="23" classIcon={iconSize} />
              <p className={iconTitleCls}>Корзина</p>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default observer(TheHeader);
