import "./CustomButton.styles.scss";

function CustomButton({ text, handleClick }) {
  return (
    <button className="custom-button" type="button" onClick={handleClick}>
      {text}
    </button>
  );
}

export default CustomButton;
