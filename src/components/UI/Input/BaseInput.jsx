import { useEffect } from "react";
import { useInput } from "../../../validators/inputCheck";
import BaseIcon from "../../BaseIcon";

const BaseInput = ({ classes, ...props }) => {
  const min = props?.min || 2;
  const max = props?.max || 50;

  const textForm = useInput("", {
    isEmpty: true,
    minLength: min,
    maxLength: max,
  });
  let { isDirty, isEmpty, minLengthError, maxLengthError, isFocus } = textForm;
  let value = props?.value ?? textForm?.value;
  //for autocomplete
  if (props?.component === "autocomplete") {
    minLengthError = props?.value?.length >= min ? false : true;
    maxLengthError = props?.value?.length <= max ? false : true;
  }

  // при изменение value отправляем значение на верхный компонент
  useEffect(() => {
    if (textForm.isFocus)
      props.changeValues(
        props.id,
        textForm.value,
        textForm.inputValid,
        textForm.isFocus
      );
  }, [textForm.value, textForm.inputValid]);

  const successMessage = "Отлично! У вас получилось";
  const errorMessage = `Ошибка! Введите от ${min} до ${max} символов`;

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
        disabled={props?.disabled}
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
        onBlur={textForm.onBlur}
        onChange={textForm.onChange}
        onFocus={textForm.onFocus}
        autoComplete={props?.autoComplete ? "on" : "off"}
        placeholder={props?.placeholder}
        onKeyDown={props?.onKeyDown}
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

export default BaseInput;
