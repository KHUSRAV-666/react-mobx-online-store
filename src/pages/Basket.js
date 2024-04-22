import BasketList from "../components/BasketList.js";
import FooterInfo from "../components/FooterInfo.js";

const Basket = () => {
  return (
    <>
      <div>
        <h1 className="h2">Корзина</h1>
        <BasketList />
      </div>
      <FooterInfo />
    </>
  );
};

export default Basket;
