import IconsSVG from "../utils/icons.svg";

function BaseIcon({
  name,
  fill_color,
  stroke_color,
  size,
  classIcon,
  onClick: handleClick,
}) {
  return (
    <svg
      onClick={handleClick}
      className={`cursor-pointer ${classIcon ? classIcon : ""}`}
      fill={fill_color || ""}
      stroke={stroke_color}
      width={size}
      height={size}
    >
      <use xlinkHref={`${IconsSVG}#${name}`} />
    </svg>
  );
}

export default BaseIcon;
