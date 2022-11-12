import "./styles/button.css"

export function Button({ buttonClass, buttonText, onClick }) {
  return (
    <button className={"button " +  buttonClass} onClick={onClick}>
      {buttonText}
    </button>
  );
}
