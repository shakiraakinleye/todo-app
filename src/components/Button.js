import "./styles/Button.css"

export function Button({ buttonClass, buttonText, onClick }) {
  return (
    <button className={"button " +  buttonClass} onClick={onClick}>
      {buttonText}
    </button>
  );
}
