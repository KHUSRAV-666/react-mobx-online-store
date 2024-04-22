import { observer } from "mobx-react-lite";

const TheBurgerMenu = observer(({ toggleMenuState, categoryTreeModal }) => {
  const menuIconClass = [
    "w-[2.5em] h-[2.1em] max-lg:h-[1.7em] max-md:h-[23px] mr-[0.5em]",
  ];
  const iconLineClass = [
    "w-[2.5em] max-lg:w-[2.1em] h-[0.25em] max-lg:h-[3px] max-md:w-[1.9em] max-md:h-[3px] rounded-[0.5em]",
  ];

  return (
    <div className={menuIconClass}>
      <div
        className="w-full h-full flex flex-col justify-between cursor-pointer"
        onClick={(e) => toggleMenuState(e)}
      >
        <div
          className={`${iconLineClass} ${
            categoryTreeModal.isOpen
              ? "burger_clicked_first bg-x_orange-500 max-lg:burger_clicked_first_max_lg max-md:burger_clicked_first_max_md"
              : "burger_unclicked_all bg-x_neutral-200"
          }`}
        ></div>
        <div
          className={`${iconLineClass} ${
            categoryTreeModal.isOpen
              ? "burger_clicked_second bg-x_orange-500"
              : "burger_unclicked_all bg-x_neutral-200"
          }`}
        ></div>
        <div
          className={`${iconLineClass} ${
            categoryTreeModal.isOpen
              ? "burger_clicked_third bg-x_orange-500 max-lg:burger_clicked_third_max_lg max-md:burger_clicked_third_max_md"
              : "burger_unclicked_all bg-x_neutral-200"
          }`}
        ></div>
      </div>
    </div>
  );
});

export default TheBurgerMenu;
