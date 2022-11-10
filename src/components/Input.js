export function Input({
  fieldClass,
  labelClass,
  labelText,
  inputClass,
  inputId,
  inputHint,
  onChange
}) {

  return (
    <div className={fieldClass}>
      <label className={labelClass} for={inputId}>
        {labelText}
      </label>
      <input
        type="text"
        id={inputId}
        className={inputClass}
        placeholder={inputHint}
        onChange={onChange}
      />
    </div>
  );
}