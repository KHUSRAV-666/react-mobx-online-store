import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import Loader from "../spinner/Loader";
import Input from "../components/UI/Input";
import BaseButton from "../components/BaseButton";
import FooterInfo from "../components/FooterInfo";
import {
  BASKET_ROUTE,
  SHOP_ROUTE,
} from "../utils/consts/routes_link";
import { RoundLoader } from "../spinner/RoundLoader";

const Checkout = () => {
  const { userStore, basket } = useContext(AppContext);
  const navigate = useNavigate();
  const [fetching, setFetching] = useState(false); // loader, пока получаем корзину
  const [order, setOrder] = useState(null);
  const [sending, setSending] = useState(false);

  const [values, setValues] = useState({});
  const changeValues = (formName, formValue, formValid) => {
    if (formValue.length > 0) {
      const obj = {};
      obj[formName] = formValue;
      obj["valid_" + formName] = formValid;
      setValues({ ...values, ...obj });
    } else {
      const obj = values;
      delete obj[formName];
      delete obj["valid_" + formName];
      setValues(obj);
    }
  };

  if (fetching) {
    return <Loader />;
  }

  if (order) {
    // заказ был успешно оформлен
    return (
      <>
        <div className="main_container flex flex-col justify-start items-center mb-4">
          <h1 className="mb-4 mt-4 text-[2em]">Заказ успешно оформлен</h1>
          <p className="text-[3em] text-x_cyan-600">Спасибо за заказ!</p>
          <BaseButton
            variant="outlined_success"
            children="На главную"
            classButton="rounded-full"
            onClick={() => navigate(SHOP_ROUTE)}
          />
        </div>
        <FooterInfo />
      </>
    );
  }

  const handleSubmit = async (event) => {
    setSending(true);
    event.preventDefault();
    if (
      values.valid_name &&
      values.valid_email &&
      values.valid_phone &&
      values.valid_address
    ) {
      setOrder("sent");
      basket.products = [];
      setSending(false);
    }
  };

  return (
    <>
      <div>
        {basket.count === 0 && <Navigate to={BASKET_ROUTE} replace={true} />}
        <h1 className="h2">Оформление заказа</h1>
        <form
          className="lg:grid lg:grid-cols-2 lg:gap-4 sx:p-6 max-sx:p-3 bg-white form_group_shadow rounded-lg mb-4"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-flow-row gap-[20px] text-x_neutral-700">
            {/* NAME INPUT ============================================================ */}
            <Input
              label="Ваше имя"
              type="text"
              id="name"
              required
              changeValues={changeValues}
            />
            {/* EMAIL INPUT ============================================================ */}
            <Input
              label="Ваш email"
              type="email"
              id="email"
              required
              changeValues={changeValues}
            />
            {/* PHONE INPUT ============================================================ */}
            <Input
              label="Ваш телефон"
              type="phone"
              id="phone"
              required
              changeValues={changeValues}
              max={9}
              validNumber={9}
              helperText="Введите номер телефона без (+992)"
            />
            {/* ADDRESS INPUT ============================================================ */}
            <Input
              label="Ваш Адрес"
              type="textarea"
              id="address"
              required
              changeValues={changeValues}
            />
            {/* COMMENT INPUT ============================================================ */}
            <Input
              label="Сообщение"
              type="textarea"
              id="comment"
              max={500}
              changeValues={changeValues}
            />
          </div>
          <div>
            <div className="text-[0.9em] text-x_neutral-600">
              <p className="mb-3">
                <span className="text-x_red-500 font-semibold">*</span> Поля,
                обязательные для заполнения
              </p>
              <p className="mb-3">
                <span className="text-x_red-500 font-semibold">-</span> Отправка
                товара производится только после оплата товара. Стоимость
                доставки возможно оплатить после получении заказа.
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between mt-4">
            <BaseButton
              disabled={
                !values.valid_name ||
                !values.valid_email ||
                !values.valid_phone ||
                !values.valid_address
              }
              variant="contained_orange"
              type="submit"
              children="Отправить заказ"
            />
            {sending && <RoundLoader />}
          </div>
        </form>
      </div>
      {userStore?.user?.isActive && <FooterInfo />}
    </>
  );
};

export default Checkout;
