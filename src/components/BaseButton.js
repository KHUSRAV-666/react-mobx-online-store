function BaseButton({
  size,
  variant,
  classButton,
  onClick: handleClick,
  children: label,
  disabled,
  type,
}) {
  const sizeCls = [
    size === "sm"
      ? "h-7 leading-[7px] px-2"
      : size === "md"
      ? "h-8 leading-[8px] px-3"
      : "h-10 leading-[10px] px-4",
  ];
  let typeClasses = null;
  if (variant === "contained_current") {
    typeClasses = "button_contained_classes contained_current";
  } else if (variant === "contained_orange") {
    typeClasses = "button_contained_classes contained_orange";
  } else if (variant === "contained_gray") {
    typeClasses = "button_contained_classes contained_gray";
  } else if (variant === "outlined_current") {
    typeClasses = "button_outlined_classes outlined_current";
  } else if (variant === "outlined_orange") {
    typeClasses = "button_outlined_classes outlined_orange";
  } else if (variant === "outlined_success") {
    typeClasses = "button_outlined_classes outlined_success";
  } else if (variant === "outlined_danger") {
    typeClasses = "button_outlined_classes outlined_danger";
  } else {
    typeClasses = "text-white leading-5 h-11 leading-[11px] px-4 sm:px-[38px]";
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${"focus:outline-none"} ${sizeCls} ${
        disabled
          ? "button_contained_classes bg-x_neutral-200 opacity-80 cursor-not-allowed"
          : typeClasses
      } ${classButton}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

export default BaseButton;
