const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? '#000' : '#fff',
      }}
    >
      <p>{colorValue ? colorValue : 'Sin color'}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

Square.defaultProps = {
  colorValue: 'red',
};

export default Square;
