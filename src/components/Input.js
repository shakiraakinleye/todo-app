import "./styles/Input.css";

export function Input({
  fieldClass = "",
  labelClass = "",
  labelText = "",
  inputClass = "",
  inputId = "",
  inputHint = "",
  onChange = "",
  value,
}) {
  return (
    <div className={fieldClass}>
      <label className={"label " + labelClass} htmlFor={inputId}>
        {labelText}
      </label>
      <input
        type="text"
        id={inputId}
        value={value}
        className={"input " + inputClass}
        placeholder={inputHint}
        onChange={onChange}
      />
    </div>
  );
}
