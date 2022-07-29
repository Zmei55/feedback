import React from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import { OptionsContainer, Titel, Options } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({
  title,
  onIncrementGood,
  onIncrementNuetral,
  onIncrementBad,
}) => {
  return (
    <OptionsContainer>
      <Titel>{title}</Titel>
      <Options>
        <Button type="button" handleIncrement={onIncrementGood} text="Good" />
        <Button
          type="button"
          handleIncrement={onIncrementNuetral}
          text="Neutral"
        />
        <Button type="button" handleIncrement={onIncrementBad} text="Bad" />
      </Options>
    </OptionsContainer>
  );
};

FeedbackOptions.propTypes = {
  title: PropTypes.string.isRequired,
  onIncrementGood: PropTypes.func.isRequired,
  onIncrementNuetral: PropTypes.func.isRequired,
  onIncrementBad: PropTypes.func.isRequired,
};
