import { useState, useContext } from "react";
import BaseRatingStatic from "./BaseRatingStatic";
import { AppContext } from "../contexts/AppContext";
import BaseIcon from "./BaseIcon";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ data, addToCart }) => {
  const { basket, catalog, userStore } = useContext(AppContext);
  const navigate = useNavigate();

  const [isHover, setIsHover] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const prodItem = [
    "relative overflow-hidden w-full rounded-md border-[1px] border-black/30 bg-black/10 hover:bg-black/20",
  ];
  const prodTitle = [
    "font-medium text-x_neutral-500 text-[.9rem] max-sm:text-[0.8rem] xl:text-[1rem] truncate px-2 pt-1 text-left",
  ];
  const prodFooter = ["grid grid-cols-2 justify-between items-center p-2"];
  const prodRating = ["flex justify-start"];
  const prodBrand = [
    "text-x_neutral-800 text-[.8rem] max-sm:text-[0.7rem] lowercase text-right cursor-pointer hover:underline hover:text-secondary",
  ];
  const prodAddToCart = [
    "relative w-[2.5rem] h-[2.5rem] max-sm:w-[2rem] max-sm:h-[2rem] bg-[#ff67008f] hover:bg-[#ff6700a8] rounded-full items-center add_to_cart_before cursor-pointer",
  ];
  const prodPrice = [
    "-ml-[35%] font-bold text-x_neutral-800 text-[1.2rem] max-sm:text-[.8rem] text-right tjs",
  ];

  return (
    <div className="relative w-full max-e_sx:mb-2">
      <span
        className="absolute top-2 right-2 cursor-pointer z-20 opacity-70"
        onClick={() => setFavorite(!favorite)}
      >
        <BaseIcon
          name={favorite ? "favorite-red" : "favorite-outline"}
          stroke_color={"#ffffff"}
          size="32"
        />
      </span>
      <div className={prodItem}>
        <div className="w-full p-2 flex items-center justify-center">
          <img
            width={"100%"}
            style={{
              maxHeight: 220,
              borderRadius: "2px",
            }}
            src={`./images/product/${data?.image?.url || "productbg.png"}`}
            alt={data?.image?.alt || "alt_empty"}
            onClick={() => navigate(`/product/${data.id}`)}
          />
        </div>
        <div className={isHover ? "slow_transition_200 opacity-0" : ""}>
          <h3
            className={prodTitle}
            onClick={() => navigate(`/product/${data.id}`)}
          >
            {data?.name}
          </h3>
          <div className={prodFooter}>
            <div className={prodRating}>
              <BaseRatingStatic size="text-[0.9rem]" rate={data?.ratings} />
            </div>
            <div className={prodBrand}>{data?.brand}</div>
            <div
              className={prodAddToCart}
              onClick={() => addToCart(data)}
            ></div>
            <div className={prodPrice}>{data?.price} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(ProductItem);
