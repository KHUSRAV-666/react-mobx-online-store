import { useNavigate } from "react-router-dom";

const BasketItem = (props) => {
  const navigate = useNavigate();

  const qtyButtons = [
    "block text-center text-[17px] cursor-pointer w-10 h-10",
  ];
  const rowClasses = [
    "relative max-md:before:absolute max-md:before:left-0 max-md:before:font-medium max-sm:text-[0.9em] max-e_sx:text-[0.8em]",
  ];

  return (
    <tr className="grid md:grid-cols-[60px_120px_3fr_1fr_1fr_1fr] items-center md:border-b-[1px] text-x_neutral-800 md:border-black/10 md:h-20 max-md:grid max-md:grid-flow-row max-md:text-end max-md:mb-4 max-md:p-2 max-md:pt-8 max-md:rounded-[5px] max-md:shadow-[0_0_3px_0]">
      <td className="relative w-16">
        <p
          className="round_close text-[12px] leading-[12px] text-white sm:hover:font-extrabold flex items-center justify-center"
          onClick={() => props.remove(props.id)}
        >
          &#10005;
        </p>
      </td>
      <td className={`${rowClasses} ${"max-md:before:content-['Артикул']"}`}>
        <p
          className="text-x_cyan-600 font-medium max-sx:ml-[33%] sm:cursor-pointer sm:hover:underline"
          onClick={() => navigate(`/product/${props.id}`)}
        >
          {props.sku}
        </p>
      </td>
      <td className={`${rowClasses} ${"max-md:before:content-['Название']"}`}>
        <p
          className="text-x_cyan-600 font-medium max-sx:ml-[33%] sm:cursor-pointer sm:hover:underline"
          onClick={() => navigate(`/product/${props.id}`)}
        >
          {props.name}
        </p>
      </td>
      <td className={`${rowClasses} ${"max-md:before:content-['Количество']"}`}>
        <div className="relative flex max-md:justify-end">
          <i
            className={`${qtyButtons}, ${"rounded-l-lg leading-[1.2em]"}`}
            onClick={() => props.decrement(props.id)}
          >
            &#8722;
          </i>
          <p className="w-[3em] text-center font-bold bg-x_neutral-200 rounded-md">
            {props.quantity}
          </p>
          <i
            className={`${qtyButtons}, ${"rounded-r-lg leading-[1.2em]"}`}
            onClick={() => props.increment(props.id)}
          >
            &#43;
          </i>
        </div>
      </td>
      <td className={`${rowClasses} ${"max-md:before:content-['Цена'] tjs"}`}>
        {props.price}{" "}
      </td>
      <td className={`${rowClasses} ${"max-md:before:content-['Сумма'] tjs"}`}>
        {props.price * props.quantity}{" "}
      </td>
    </tr>
  );
};

export default BasketItem;
