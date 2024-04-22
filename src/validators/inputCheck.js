import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [numberLengthError, setNumberLengthError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "maxLength":
          value.length > validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false);
          break;
        case "isEmail":
          const re =
            // eslint-disable-next-line
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          // если емайл не соответствует требованию ( const re) то выводим ошибку
          re.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          break;
        case "numberLength":
          value.length !== validations[validation]
            ? setNumberLengthError(true)
            : setNumberLengthError(false);
          break;
        default:
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (
      isEmpty ||
      maxLengthError ||
      minLengthError ||
      emailError ||
      numberLengthError
    ) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError, maxLengthError, emailError, numberLengthError]);

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    numberLengthError,
    inputValid,
  };
};

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);
  const [isFocus, setIsFocus] = useState(false);

  const onChange = (e) => {
    // delete empty spaces in side of text оставляеть один пробел между строками
    setValue(e.target.value.replace(/^ +| +$|() +/g, " "));
  };

  const onBlur = (e) => {
    setDirty(true);
  };

  const onFocus = (e) => {
    setIsFocus(true);
    setValue(e.target.value.trimStart());
  };

  return {
    onFocus,
    isFocus,
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};
