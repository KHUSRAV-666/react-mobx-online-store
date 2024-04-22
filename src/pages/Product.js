import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../spinner/Loader";
import FooterInfo from "../components/FooterInfo";
import TheProduct from "../components/Product/TheProduct";
import { products } from "../store/products";

const Product = () => {
  const { id } = useParams();

  const [fetching, setFetching] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const thisProduct = products.find((el) => +el.id === +id);
      if (thisProduct) setProduct(thisProduct);
    }
    setFetching(false);
  }, [id]);

  if (fetching || !product) {
    return <Loader />;
  }

  return (
    <div>
      <TheProduct
        product={product}
      />
      <FooterInfo />
    </div>
  );
};

export default Product;
