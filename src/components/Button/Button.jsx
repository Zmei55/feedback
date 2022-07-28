export const Button = ({ text, handleIncrement }) => {
  return (
    <button type="button" onClick={handleIncrement}>
      {text}
    </button>
  );
};
