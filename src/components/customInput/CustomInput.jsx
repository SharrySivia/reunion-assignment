import "./CustomInput.styles.scss";

function CustomInput(
  { id, type, name, placeholder, handleChange, min },
  additionalData
) {
  return (
    <input
      id={id}
      name={name}
      className="custom-input"
      type={type}
      min={min}
      placeholder={placeholder}
      {...additionalData}
      onBlur={(e) => handleChange(e.target.name, e.target.value)}
    />
  );
}

export default CustomInput;
