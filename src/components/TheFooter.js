import BaseIcon from "./BaseIcon.js";
const TheFooter = () => {

  const FOOTER_SOCIAL = [
    { id: 1, socialName: "facebook", color: "#4867aa" },
    { id: 2, socialName: "whatsapp", color: "#1ad03f" },
    { id: 3, socialName: "telegram", color: "#239fdb" },
    { id: 4, socialName: "ok", color: "#f96600" },
    { id: 5, socialName: "vk", color: "#4086ed" },
  ];

  return (
    <div className="self-end w-full">
      <footer className="bg-x_indigo-800 flex-1 items-center py-[10px] z-10">
        <div className="main_container sx:flex-row max-sx:items-center max-md:text-[0.8em] text-x_neutral-300">
          <p className="max-sx:mb-2">
            2024 © x@os_store | Designed by x@os
          </p>
          <div className="grid grid-flow-col auto-cols-[25px] gap-2 justify-self-center">
            {FOOTER_SOCIAL.map(({ id, socialName, color }) => (
              <a href="#0" key={id}>
                <BaseIcon name={socialName} fill_color={color} size="25" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TheFooter;
