import BaseDate from "./BaseDate";
import BaseInput from "./BaseInput";
import BaseEmail from "./BaseEmail";
import BaseNumber from "./BaseNumber";
import BaseTextarea from "./BaseTextarea";
import BasePassword from "./BasePassword";
import BasePhone from "./BasePhone";

const Input = ({
  disabled,
  label,
  value,
  type = "text",
  onChange = () => {},
  ...props
}) => {
  const classes = {
    blockCls: [
      `relative ${
        props?.size === "sm"
          ? "h-[31px]"
          : props?.size === "md"
          ? "h-[36px]"
          : "h-[42px]"
      }`,
    ],
    labelCls:
      "absolute pointer-events-none text-x_neutral-400 font-semibold m-0 rounded slow_transition_200",
    labelFilledCls: [
      `left-3 top-0 -translate-y-2 text-[.8em] leading-4 text-x_neutral-600 px-1 ${
        props?.labelBg ? props.labelBg : "bg-white"
      }`,
    ],
    labelEmptyCls: "top-1/2 -translate-y-1/2 left-5",
    requiredCls: "text-x_red-500 text-[.7em] font-semibold font-serif",
    inputCls: [
      `input_control ${props?.size === "sm" ? "text-[.9em]" : "text-[1em]"}`,
    ],
    iconCls: "absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer",
    iconSize: props?.size === "sm" ? "18" : props?.size === "md" ? "20" : "24",
    errorCls: "text-[0.8rem] leading-[0.8rem]",
  };

  const renderComponent = () => {
    let Component = {},
      componentProps = {};
    const defaultProps = {
      value,
      label,
      disabled,
      classes,
    };
    switch (type) {
      case "email":
        Component = BaseEmail;
        componentProps = {
          type: "email",
          ...props,
        };
        break;
      case "password":
        Component = BasePassword;
        componentProps = {
          type: "password",
          ...props,
        };
        break;
      case "date":
        Component = BaseDate;
        componentProps = {
          type: "date",
          ...props,
        };
        break;
      case "phone":
        Component = BasePhone;
        componentProps = {
          type: "number",
          ...props,
        };
        break;
      case "number":
        Component = BaseNumber;
        componentProps = {
          type: "number",
          ...props,
        };
        break;
      case "textarea":
        Component = BaseTextarea;
        componentProps = {
          type: "text",
          max: 150,
          min: 5,
          ...props,
        };
        break;
      default:
        Component = BaseInput;
        componentProps = {
          onChange: onChange,
          ...props,
        };
        break;
    }
    return <Component {...defaultProps} {...componentProps} />;
  };
  return renderComponent();
};

export default Input;
