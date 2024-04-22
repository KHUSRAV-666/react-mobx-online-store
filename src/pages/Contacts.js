import React, { useState } from "react";
import Input from "../components/UI/Input";
import BaseButton from "../components/BaseButton";
import FooterInfo from "../components/FooterInfo";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts/routes_link";

const Contacts = () => {
  const [values, setValues] = useState({});
  const navigate = useNavigate();
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

  const [order, setOrder] = useState(null);

  if (order) {
    return (
      <div className="flex flex-col items-center mb-4">
        <h1 className="mb-4 mt-4 text-[2em]">
          Ваше сообщение успешно отправлено
        </h1>
        <p className="text-[3em] text-x_cyan-600">Спасибо за отклик!</p>
        <BaseButton
          variant="outlined_success"
          children="На главную"
          classButton="rounded-full"
          onClick={() => navigate(SHOP_ROUTE)}
        />
      </div>
    );
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = values.name;
    const email = values.email;
    const message = values.message;
    if (values.valid_name && values.valid_email && values.valid_message) {
      // форма заполнена правильно, можно отправлять данные
      const body = { name, email, message };
      setOrder(1);
    }
  };

  return (
    <>
      <div>
        <h1 className="h2">ОБРАТНАЯ СВЯЗЬ</h1>
        <h3 className="mb-2">
          Напишите нам на почту, Вам обязательно ответят в кратчайший срок.
        </h3>
        <form
          className="grid grid-cols-5 gap-[20px] bg-white sx:p-6 max-sx:p-3 form_group_shadow rounded-lg mb-4"
          onSubmit={handleSubmit}
        >
          <div className="col-span-3 flex flex-col gap-[20px]">
            {/* NAME INPUT ============================================================ */}
            <Input
              required
              label="Ваше имя"
              type="text"
              id="name"
              changeValues={changeValues}
            />
            {/* EMAIL INPUT ============================================================ */}
            <Input
              required
              label="Ваш email"
              type="email"
              id="email"
              changeValues={changeValues}
            />
            {/* MESSAGE INPUT ============================================================ */}
            <Input
              required
              label="Сообщение"
              type="textarea"
              id="message"
              min={5}
              max={2000}
              changeValues={changeValues}
            />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <div className="text-[0.8em] text-x_neutral-600">
              <h3 className="font-bold text-[1rem]">Let's get in touch</h3>
              <p>
                Если у Вас возникли вопросы или жалобы по поводу работы сайта
                свяжитесь с нами в один клик. Запольните поля для обратной
                связи.
              </p>
            </div>
            <div className="text-[0.8em] text-x_neutral-600">
              <h4 className="font-bold text-[1rem]">Living In:</h4>
              <p>Khorog, Badakhshan, Tajikistan</p>
            </div>
            <div className="text-[0.8em] text-x_neutral-600">
              <h4 className="font-bold text-[1rem]">Call:</h4>
              <p>(+992) 00 933 67 07</p>
            </div>
          </div>
          <BaseButton
            disabled={
              !values.valid_name || !values.valid_email || !values.valid_message
            }
            variant="contained_orange"
            type="submit"
            children="Отправить"
          />
        </form>
      </div>
      <FooterInfo />
    </>
  );
};

export default Contacts;
