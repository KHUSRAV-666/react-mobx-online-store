import { useEffect } from "react";
import { useInput } from "../../../validators/inputCheck";
import BaseIcon from "../../BaseIcon";

const BasePhone = ({ classes, ...props }) => {
  const max = props?.max || 9;
  const numberForm = useInput("", {
    isEmpty: true,
    numberLength: props?.validNumber || 9,
  });
  const { isDirty, isEmpty, numberLengthError, isFocus } = numberForm;
  const value = isFocus ? numberForm?.value : props?.value || numberForm?.value;

  // при изменение value отправляем значение на верхный компонент
  useEffect(() => {
    if (numberForm.isFocus)
      props.changeValues(props.id, numberForm.value, numberForm.inputValid);
  }, [numberForm.value, numberForm.inputValid]);

  const successMessage = "Отлично! Номер действителен";
  const errorMessage = "Ошибка! Номер не действителен";

  return (
    <div className={`${classes?.blockCls}`}>
      {props.label && (
        <label
          htmlFor={props?.id}
          className={`${classes?.labelCls} ${
            !isEmpty || props?.value
              ? `${classes?.labelFilledCls}`
              : `${classes?.labelEmptyCls}`
          }`}
        >
          {props.label}
          {props.required && (
            <span className={`${classes?.requiredCls}`}>
              &nbsp;&nbsp;&#x2600;
            </span>
          )}
        </label>
      )}
      <input
        type={props?.type}
        id={props?.id}
        className={`${classes?.inputCls} ${
          !isDirty && isEmpty
            ? "focus:input_border_focus_classes"
            : !numberLengthError
            ? "input_border_success_classes"
            : props?.required && "input_border_error_classes"
        }`}
        value={value}
        onBlur={numberForm.onBlur}
        onChange={numberForm.onChange}
        onFocus={numberForm.onFocus}
        autocomplate="off"
        onInput={(e) => (e.target.value = e.target.value.substr(0, max))}
      />
      {!isDirty && isEmpty ? (
        props?.required && (
          <i className={classes?.iconCls}>
            <BaseIcon name="alert_filled" size={classes?.iconSize} />
          </i>
        )
      ) : !numberLengthError ? (
        <i className={classes?.iconCls}>
          <BaseIcon name="check_filled" size={classes?.iconSize} />
        </i>
      ) : (
        props?.required && (
          <i className={classes?.iconCls}>
            <BaseIcon name="error_filled" size={classes?.iconSize} />
          </i>
        )
      )}
      <p
        className={`${classes?.errorCls} ${
          !isDirty && isEmpty
            ? "text-x_neutral-700"
            : !numberLengthError
            ? "text-x_green-500"
            : "text-x_red"
        }`}
      >
        {!isDirty && isEmpty
          ? props?.helperText || ""
          : !numberLengthError
          ? successMessage
          : props?.required && errorMessage}
      </p>
    </div>
  );
};

export default BasePhone;
