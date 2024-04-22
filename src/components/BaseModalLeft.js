import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";
import useEvent from "../hooks/useEvent";
import BaseIcon from "./BaseIcon";

function BaseModalLeft({
  classes,
  style,
  onClose: handleClose,
  children,
}) {

  const ref = useRef();
  const contentRef = useRef();

  useEffect(() => {
    setTimeout(animate);
  });

  useEvent("keydown", handleEsc);

  function handleEsc({ key }) {
    if (key === "Escape") close();
  }

  function close() {
    animate(true);

    setTimeout(handleClose, 500);
  }

  function animate(isClosing = false) {
    ref.current?.classList?.toggle("opacity-0", isClosing);
    contentRef.current?.classList?.toggle("-translate-x-[100%]", isClosing);
  }

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black/70 z-20 flex justify-start items-center opacity-0 transition-opacity duration-500"
      role="dialog"
      ref={ref}
      onClick={close}
    >
      <div
        className={`flex flex-col relative text-white -translate-x-[100%] transition-transform duration-500 scrollbar ${classes}`}
        style={style}
        ref={contentRef}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute right-6 cursor-pointer">
          <BaseIcon
            name="close_x"
            size="20"
            onClick={close}
            fill_color="#000"
          />
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default BaseModalLeft;
