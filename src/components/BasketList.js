import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext.js";
import { useNavigate } from "react-router-dom";
import BasketItem from "./BasketItem.js";
import { observer } from "mobx-react-lite";
import BaseButton from "./BaseButton.js";
import BaseIcon from "./BaseIcon.js";
import { CHECKOUT_ROUTE, SHOP_ROUTE } from "../utils/consts/routes_link";

const BasketList = () => {
  const { basket } = useContext(AppContext);
  const navigate = useNavigate();

  const [basketItems, setBasketItems] = useState(basket.products);

  const handleIncrement = (id) => {
    const itemsList = basketItems;
    const incrementList = itemsList.map((el) =>
      el.id === +id ? { ...el, quantity: el.quantity + 1 } : el
    );
    setBasketItems(incrementList);
  };

  const handleDecrement = (id) => {
    const product = basketItems.find((el) => +el.id === +id);
    if (+product.quantity === 1) {
      handleRemove(id);
    } else {
      const itemsList = basketItems;
      const decrementList = itemsList.map((el) =>
        el.id === +id ? { ...el, quantity: el.quantity - 1 } : el
      );
      setBasketItems(decrementList);
    }
  };

  const handleRemove = (id) => {
    const itemsList = basketItems;
    const removeFromList = itemsList.filter((el) => el.id !== +id);
    setBasketItems(removeFromList);
  };

  useEffect(() => {
    basket.products = basketItems;
  }, [basketItems]);

  const handleClear = () => {
    setBasketItems([]);
  };

  return (
    <>
      {basket.count ? (
        <>
          <table className="mt-3 w-full mb-4">
            <thead>
              <tr className="grid grid-cols-[60px_120px_3fr_1fr_1fr_1fr] items-center text-left text-x_neutral-800 md:border-b-[2px] md:border-black md:h-[37.55px] max-md:hidden">
                <th></th>
                <th>Артикул</th>
                <th>Название</th>
                <th>Количество</th>
                <th>Цена</th>
                <th>Сумма</th>
              </tr>
            </thead>
            <tbody>
              {basket.products.map((item) => (
                <BasketItem
                  key={item.id}
                  increment={handleIncrement}
                  decrement={handleDecrement}
                  remove={handleRemove}
                  {...item}
                />
              ))}
              <tr className="relative border-b-[2px] border-black">
                <th colSpan={4} className="h2 text-left">
                  Итого
                </th>
                <th className="absolute right-0 tjs h2 font-bold flex items-center gap-2">
                  {basket.sum}
                </th>
              </tr>
            </tbody>
          </table>
          <div className="flex max-sx:flex-col sx:justify-between mb-4">
            <BaseButton
              variant="contained_orange"
              onClick={() => handleClear()}
              classButton="max-md:text-[0.8em] max-sx:mb-3"
            >
              Очитить корзину
            </BaseButton>
            <BaseButton
            onClick={() => navigate(CHECKOUT_ROUTE)}
            variant="contained_orange"
              classButton={`${"max-md:text-[0.8em]"}`}
            >
              Оформить заказ
            </BaseButton>
          </div>
        </>
      ) : (
        <div className="relative flex flex-col items-center justify-center w-full h-96">
          <BaseIcon name="empty_cart" size="100%" />
          <p className="text-3xl uppercase text-x_neutral-900 font-bold mt-5">
            Ваша корзина пуста
          </p>
          <p className="text-xl text-x_neutral-900 font-medium mt-5">
            Давайте добавим в неё что-нибудь...
          </p>
          <BaseButton
            variant="contained_current"
            onClick={() => navigate(SHOP_ROUTE)}
            children="На главную..."
            classButton="w-[20%] min-w-[168px] my-5 h-20"
          />
        </div>
      )}
    </>
  );
};

export default observer(BasketList);
