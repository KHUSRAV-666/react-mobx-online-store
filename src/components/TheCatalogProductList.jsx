import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import ProductItem from "./ProductItem";

const TheCatalogProductList = () => {
  const { basket, catalog } = useContext(AppContext);
  const [basketItems, setBasketItems] = useState(basket.products);

  // add to cart
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

  const handlePageClick = (page) => {
    catalog.page = page;
  };

  // содержимое компонента <Pagination>
  const pages = [];
  for (let page = 1; page <= catalog.pages; page++) {
    pages.push(
      <div
        className={`${"base_pag"} ${
          page === catalog.page ? "active_pag" : "none_active_pag"
        }`}
        key={page}
        onClick={() => handlePageClick(page)}
      >
        {page}
      </div>
    );
  }

  const itemsColumn = [
    "grid max-e_sx:grid-cols-1 e_sx:grid-cols-2 e_sx:gap-1 sx:grid-cols-3 md:grid-cols-4 sm:gap-2 xl:grid-cols-4 xl:gap-4 2xl:grid-cols-5 2xl:gap-5 mb-3",
  ];

  return (
    <>
      <div className={itemsColumn}>
        {catalog.products.map((item) => (
          <ProductItem key={item.id} data={item} addToCart={addToCart} />
        ))}
      </div>
      {catalog.pages > 1 && <div className="flex">{pages}</div>}
    </>
  );
};

export default TheCatalogProductList;
