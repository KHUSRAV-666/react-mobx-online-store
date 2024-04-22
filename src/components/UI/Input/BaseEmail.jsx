import { useEffect } from "react";
import { useInput } from "../../../validators/inputCheck";
import BaseIcon from "../../BaseIcon";

const BaseEmail = ({ classes, ...props }) => {
  const emailForm = useInput("", { isEmpty: true, isEmail: true });
  const { isDirty, isEmpty, emailError, isFocus } = emailForm;
  let value = isFocus ? emailForm?.value : props?.value || emailForm?.value;

  // при изменение value отправляем значение на верхный компонент
  useEffect(() => {
    if (emailForm.isFocus)
      props.changeValues(props.id, emailForm.value, emailForm.inputValid);
  }, [emailForm.value, emailForm.inputValid]);

  const successMessage = "Отлично! Email действителен";
  const errorMessage = "Ошибка! Email не действителен";

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
            : !emailError
            ? "input_border_success_classes"
            : props?.required && "input_border_error_classes"
        }`}
        value={value}
        onBlur={emailForm.onBlur}
        onChange={emailForm.onChange}
        onFocus={emailForm.onFocus}
        autocomplate="on"
      />
      {!isDirty && isEmpty ? (
        props?.required && (
          <i className={classes?.iconCls}>
            <BaseIcon name="alert_filled" size={classes?.iconSize} />
          </i>
        )
      ) : !emailError ? (
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
            : !emailError
            ? "text-x_green-500"
            : "text-x_red"
        }`}
      >
        {!isDirty && isEmpty
          ? props?.helperText || ""
          : !emailError
          ? successMessage
          : props?.required && errorMessage}
      </p>
    </div>
  );
};

export default BaseEmail;
