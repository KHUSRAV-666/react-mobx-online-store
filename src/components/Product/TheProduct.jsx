import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../contexts/AppContext.js";
import BaseIcon from "../BaseIcon";
import BaseButton from "../BaseButton";
import { observer } from "mobx-react-lite";
import BaseGoBack from "../BaseGoBack";
import BaseRatingStatic from "../BaseRatingStatic.js";

const TheProduct = ({ product }) => {
  const { basket } = useContext(AppContext);

  const [favorite, setFavorite] = useState(false);
  const [basketItems, setBasketItems] = useState(basket.products);

  const addToCart = (item) => {
    const product = {
      id: item.id,
      sku: item.sku,
      name: item.name,
      price: item.price,
      quantity: 1,
      link: item.slug + "-" + item.webId,
    };
    const ids = basketItems.map((e) => +e.id);
    if (ids.includes(+item.id)) {
      const itemsList = basketItems;
      const changeList = itemsList.map((el) =>
        el.id === +item.id ? { ...el, quantity: el.quantity + 1 } : el
      );
      setBasketItems(changeList);
    } else {
      setBasketItems([...basketItems, product]);
    }
  };

  useEffect(() => {
    if (basketItems.length) basket.products = basketItems;
  }, [basketItems]);

  return (
    <>
      <BaseGoBack />
      <h1 className="h1">{product?.name}</h1>
      <div className="grid lg:grid-cols-[500px_1fr_1fr] gap-4 mb-4">
        {/* PHOTO BLOCK ============================================================================================ */}
        <img
          style={{ borderRadius: "6px" }}
          className="object-cover"
          width={"100%"}
          height={"100%"}
          src={`../images/product/${product?.image?.url || "productbg.png"}`}
          alt={product?.image?.alt || "no_alt"}
        />
        <div className="flex flex-col sm:gap-8 gap-4">
          <span>
            Артикул:{" "}
            <b className="text-x_orange-500 font-bold text-base">
              {product?.sku}
            </b>
          </span>
          <span>
            Категория:{" "}
            <b className="text-x_orange-500 font-bold text-base">
              {product?.category}
            </b>
          </span>
          <span>
            Бренд:{" "}
            <b className="text-x_orange-500 font-bold text-base">
              {product?.brand}
            </b>
          </span>
          <span>
            Цена:{" "}
            <b className="text-x_orange-500 font-bold text-base tjs">
              {product?.price}{" "}
            </b>
          </span>
          <span>
            Рейтинг:{" "}
            <b className="text-x_orange-500 font-bold text-base">
              {product?.ratings}
            </b>
          </span>
          <span>
            Количество:{" "}
            <b className="text-x_orange-500 font-bold text-base">
              {product?.stock}
            </b>
          </span>
        </div>
        <div className="flex flex-col gap-4 min-w-[220px]">
          <BaseRatingStatic size='lg:text-6xl md:text-5xl' rate={product?.ratings} />
          <span className="flex items-center gap-4">
            <BaseIcon
              name={favorite ? "favorite-red" : "favorite-outline"}
              size="32"
              onClick={() => setFavorite(!favorite)}
            />
            {favorite ? "Удалить из избранных" : "Добавить в избранное"}
          </span>
          <BaseButton
            variant="contained_current"
            onClick={() => addToCart(product)}
            children="Добавить в корзину"
            classButton="max-lg:w-full max-lg:h-8 max-md:text-[.8rem] lg:col-span-2"
          />
        </div>
      </div>
    </>
  );
};

export default observer(TheProduct);
