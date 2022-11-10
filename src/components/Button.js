export function Button({ buttonClass, buttonText, onClick }) {
  return (
    <button className={buttonClass} onClick={onClick}>
      {buttonText}
    </button>
  );
}
