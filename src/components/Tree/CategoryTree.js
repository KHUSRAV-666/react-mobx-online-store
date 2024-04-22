import { observer } from "mobx-react-lite";
import React from "react";
import BaseModalLeft from "../../components/BaseModalLeft";
import { useNavigate } from "react-router-dom";

const Tree = ({ categoryTreeModal }) => {
  const navigate = useNavigate();

  const goTo = (e) => {
    navigate(`/catalog/${e.target.getAttribute("data-link")}`);
    categoryTreeModal.close();
  };
  const menuItemCls =
    "text-x_neutral-600 px-2 py-1 rounded-[2px] hover:text-x_cyan-600 hover:underline hover:bg-x_neutral-200 cursor-pointer";

  return (
    <>
      {categoryTreeModal.isOpen && (
        <BaseModalLeft
          classes="bg-white p-4 min-w-[30%] pr-16 w-fit max-sx:w-full h-full"
          onClose={categoryTreeModal.close}
        >
          <header className="text-[1.5rem] max-md:text-base mb-4 text-x_neutral-800">
            <h2 className="px-2">КАТЕГОРИИ ТОВАРОВ</h2>
          </header>
          <p
            data-link="mobile-phones"
            onClick={(e) => goTo(e)}
            className={menuItemCls}
          >
            Мобилные телефоны
          </p>
          <p
            data-link="notebooks"
            onClick={(e) => goTo(e)}
            className={menuItemCls}
          >
            Ноутбуки
          </p>
          <p
            data-link="clothes"
            onClick={(e) => goTo(e)}
            className={menuItemCls}
          >
            Одежда
          </p>
          <p
            data-link="products"
            onClick={(e) => goTo(e)}
            className={menuItemCls}
          >
            Продукты
          </p>
          <p
            data-link="electronics"
            onClick={(e) => goTo(e)}
            className={menuItemCls}
          >
            Электроника
          </p>
          <p
            data-link="for-house"
            onClick={(e) => goTo(e)}
            className={menuItemCls}
          >
            Для дома
          </p>
        </BaseModalLeft>
      )}
    </>
  );
};

export default observer(Tree);
