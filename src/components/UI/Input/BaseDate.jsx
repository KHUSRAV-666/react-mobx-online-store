const BaseDate = ({classes, ...props}) => {

  return (
    <div className={`${classes?.blockCls}`}>
      {props?.label && (
        <label
          htmlFor={props?.id}
          className={`${classes?.labelCls} ${classes?.labelFilledCls}`}
        >
          {props?.label}
          {props?.required && (
            <span className={`${classes?.requiredCls}`}>
              &nbsp;&nbsp;&#x2600;
            </span>
          )}
        </label>
      )}
      <input
        type={props?.type}
        id={props?.id}
        className={`${classes?.inputCls} focus:input_border_focus_classes`}
        value={props?.value || ''}
        onChange={props?.changeValues}
        autocomplate="off"
      />
    </div>
  );
};

export default BaseDate;
