import { useNavigate } from "react-router-dom";
import { useResize } from "../hooks/useWindowWidth.js";
import { CONTACTS_ROUTE } from "../utils/consts/routes_link";
import BaseIcon from "./BaseIcon.js";

const FooterInfo = () => {
  // get windowWidth
  const navigate = useNavigate();
  const { windowWidth } = useResize();

  const onSocialHover = (e) => {
    e.target.style.fill = "#1f8289";
  };
  const onSocialLeave = (e) => {
    e.target.style.fill = "white";
  };

  const FOOTER_INFO = [
    {
      id: 1,
      icon: "zakaz",
      linkName: "Как заказать",
      desc: "Узнайте как заказать товары",
      link: "/zakaz",
    },
    {
      id: 2,
      icon: "payments",
      linkName: "Способы оплаты",
      desc: "Какими способами можно оплатить товары",
      link: "/payments",
    },
    {
      id: 3,
      icon: "delivery",
      linkName: "Доставка и сборка",
      desc: "Сколько времени займет сборка вашего заказа",
      link: "/delivery",
    },
    {
      id: 4,
      icon: "add_product",
      linkName: "Разместить товарь",
      desc: "Ваш товарь",
      link: "/add_product",
    },
    {
      id: 5,
      icon: "contacts",
      linkName: "Контакты",
      desc: "Контакты для обратной связы",
      link: CONTACTS_ROUTE,
    },
    {
      id: 6,
      icon: "response",
      linkName: "Отзывы",
      desc: "Ставьте отзывы продавцам",
      link: "/response",
    },
    {
      id: 7,
      icon: "privacy",
      linkName: "Политика конфиденциальности",
      desc: "Нужно знать",
      link: "/privacy",
    },
    {
      id: 8,
      icon: "about",
      linkName: "О нас",
      desc: "Наши цели и возможности",
      link: "/about",
    },
  ];

  return (
    <div className="border-y-[3px] border-dashed border-x_neutral-200 py-3 mb-3">
      <h2 className="h2">Информация</h2>
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sx:grid-cols-1 gap-1">
        {FOOTER_INFO.map(({ id, icon, linkName, desc, link }) => (
          <div
            className="flex items-center mb-3"
            href="#0"
            key={id}
            onMouseEnter={(e) => onSocialHover(e)}
            onMouseLeave={(e) => onSocialLeave(e)}
            onClick={() => navigate(link)}
          >
            <div className="bg-x_cyan-500/60 w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-full mr-2">
              <BaseIcon name={icon} size={windowWidth >= 1024 ? "40" : "30"} />
            </div>
            <div>
              <h3 className="font-bold text-[1.2rem] max-md:text-[0.9rem] max-sx:font-semibold max-sx:text-[0.8rem] text-x_cyan-500 cursor-pointer hover:text-x_cyan-600 hover:underline">
                {linkName}
              </h3>
              <p className="text-sm max-md:text-[0.8em] max-sx:text-[0.7em] text-x_neutral-500">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterInfo;
