import colornames from 'colornames';

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Añadir nombre de color:</label>
      <input
        autoFocus
        type="text"
        placeholder="Añadir nombre de color"
        required={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colornames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Cambiar color del texto
      </button>
    </form>
  );
};

export default Input;
