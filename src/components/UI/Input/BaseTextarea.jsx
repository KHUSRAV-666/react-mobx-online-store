import React, { useEffect, useRef } from "react";
import { useInput } from "../../../validators/inputCheck";
import BaseIcon from "../../BaseIcon";

const BaseTextarea = ({ classes, ...props }) => {
  const textAreaRef = useRef(null);
  const min = props?.min || 5;
  const max = props?.max || 3000;
  const textareaForm = useInput("", {
    isEmpty: true,
    minLength: min,
    maxLength: max,
  });
  const { isDirty, isEmpty, minLengthError, maxLengthError, isFocus } =
    textareaForm;
  const value = isFocus
    ? textareaForm?.value
    : props?.value || textareaForm?.value;

  // при изменение value отправляем значение на верхный компонент
  useEffect(() => {
    if (textareaForm.isFocus)
      props.changeValues(props.id, textareaForm.value, textareaForm.inputValid);
  }, [textareaForm.value, textareaForm.inputValid]);

  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [value]);

  const textAreaCls =
    props?.size === "sm"
      ? "pt-[4px] min-h-[31px]"
      : props?.size === "md"
      ? "pt-[6px] min-h-[35px]"
      : "pt-[8px] min-h-[42px]";
  const successMessage = "Отлично! Текст соответствует требованиям";
  const errorMessage = `Ошибка! Введите от ${props.min} до ${props.max} символов`;

  return (
    <div
      className={`${classes?.blockCls}`}
      style={{ height: textAreaRef?.current?.scrollHeight + 2 + "px" }}
    >
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
      <textarea
        disabled={props?.disabled}
        rows="1"
        type={props.type}
        id={props.id}
        value={value}
        ref={textAreaRef}
        onBlur={(e) => textareaForm.onBlur(e)}
        onChange={(e) => textareaForm.onChange(e)}
        onFocus={textareaForm.onFocus}
        className={`${"hide-scrollbar"} ${textAreaCls} ${classes?.inputCls} ${
          (!isDirty && isEmpty) || props?.disabled
            ? "focus:input_border_focus_classes"
            : !minLengthError && !maxLengthError
            ? "input_border_success_classes"
            : props?.required && "input_border_error_classes"
        }`}
        autocomplate="off"
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
            : props?.required
            ? "text-x_red"
            : "text-x_neutral-700"
        }`}
      >
        {!isDirty && isEmpty
          ? props?.helperText || ""
          : !minLengthError && !maxLengthError
          ? successMessage
          : props?.required
          ? errorMessage
          : errorMessage.substring(8, 40)}
      </p>
    </div>
  );
};

export default BaseTextarea;
