import { Btn } from './Button.styled';

export const Button = ({ text, handleIncrement }) => {
  return (
    <Btn type="button" onClick={handleIncrement}>
      {text}
    </Btn>
  );
};
