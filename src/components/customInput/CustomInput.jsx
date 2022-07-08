import "./CustomInput.styles.scss";

function CustomInput(
  { id, type, name, placeholder, handleChange, list },
  additionalData
) {
  return (
    <input
      id={id}
      name={name}
      className="custom-input"
      type={type}
      placeholder={placeholder}
      {...additionalData}
      onBlur={(e) => handleChange(e.target.name, e.target.value)}
    />
  );
}

export default CustomInput;
