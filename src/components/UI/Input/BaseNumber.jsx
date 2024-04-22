import { useEffect } from "react";
import { useInput } from "../../../validators/inputCheck";
import BaseIcon from "../../BaseIcon";

const BaseNumber = ({ classes, ...props }) => {
  const min = props?.min || 1;
  const max = props?.max || 50;
  const numberForm = useInput("", {
    isEmpty: true,
    minLength: min,
    maxLength: max,
  });
  const { isDirty, isEmpty, minLengthError, maxLengthError, isFocus } =
    numberForm;
  const value = isFocus ? numberForm?.value : props?.value || numberForm?.value;

  // при изменение value отправляем значение на верхный компонент
  useEffect(() => {
    if (numberForm.isFocus)
      props.changeValues(props.id, numberForm.value, numberForm.inputValid);
  }, [numberForm.value, numberForm.inputValid]);

  const successMessage = "Отлично! У вас получилось";
  const errorMessage = `Ошибка! Введите от ${min} до ${max} цифр`;

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
            : !minLengthError && !maxLengthError
            ? "input_border_success_classes"
            : props?.required && "input_border_error_classes"
        }`}
        value={value}
        onBlur={numberForm.onBlur}
        onChange={numberForm.onChange}
        onFocus={numberForm.onFocus}
        autoComplete={props?.autoComplete ? "on" : "off"}
        // onInput={(e) => (e.target.value = e.target.value.substr(0, max))}
      />
      {!isDirty && isEmpty ? (
        props?.required && (
          <i className={classes?.iconCls}>
            <BaseIcon name="alert_filled" size={classes?.iconSize} />
          </i>
        )
      ) : !minLengthError && !maxLengthError ? (
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
            : !minLengthError && !maxLengthError
            ? "text-x_green-500"
            : "text-x_red"
        }`}
      >
        {!isDirty && isEmpty
          ? props?.helperText || ""
          : !minLengthError && !maxLengthError
          ? successMessage
          : props?.required && errorMessage}
      </p>
    </div>
  );
};

export default BaseNumber;
