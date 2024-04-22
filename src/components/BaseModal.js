import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";
import useEvent from "../hooks/useEvent";
import BaseIcon from "./BaseIcon";

function BaseModal({ classes, onClose: handleClose, children }) {
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
    contentRef.current?.classList?.toggle("-translate-y-10", isClosing);
  }

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black/70 z-30 flex justify-center items-center opacity-0 transition-opacity duration-500"
      role="dialog"
      ref={ref}
      onClick={close}
    >
      <div
        className={`relative flex flex-col rounded-xl -translate-y-10 transition-transform duration-500 pr-0 max-h-[70vh] ${classes}`}
        ref={contentRef}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="absolute w-7 h-7 bg-x_neutral-100 rounded-full -right-2 -top-2 shadow-md flex items-center justify-center cursor-pointer"
          onClick={close}
        >
          <BaseIcon name="close_x" size="9" fill_color="#000" />
        </div>
        <div className="overflow-y-auto scrollbar pr-4">{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default BaseModal;
