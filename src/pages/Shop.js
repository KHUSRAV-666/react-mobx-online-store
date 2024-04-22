import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import TheCatalogProductList from "../components/TheCatalogProductList";
import Loader from "../spinner/Loader";
import FooterInfo from "../components/FooterInfo";
import { products } from "../store/products";
import TheShopAdsSlider from "../components/TheShopAdsSlider";

const Shop = observer(() => {
  const { catalog } = useContext(AppContext);

  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (products.length && catalog.limit) {
      const items = [];
      products.map((el, index) => {
        if (index < catalog.limit) items.push(el);
      });
      catalog.products = items;
      catalog.count = products.length;
    }
    setFetching(false);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (products.length) {
      setFetching(true);
      const items = [];
      products.map((el, index) => {
        if (
          index >= (catalog.page - 1) * catalog.limit &&
          index < catalog.page * catalog.limit
        ) {
          items.push(el);
        }
      });
      catalog.products = items;
      catalog.count = products.length;
    }
    setFetching(false);
    // eslint-disable-next-line
  }, [catalog.page]);

  if (fetching) {
    return <Loader />;
  }

  return (
    <>
      <div>
        <div className="flex flex-col mb-3">
          {/* List & Empty View */}
          <TheShopAdsSlider />
          {catalog.products && <TheCatalogProductList />}
        </div>
      </div>
      <FooterInfo />
    </>
  );
});

export default Shop;
