import React from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";

export const FeedbackOptions = ({
  title,
  onIncrementGood,
  onIncrementNuetral,
  onIncrementBad,
}) => {
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <div>
        <Button type="button" handleIncrement={onIncrementGood} text="Good" />
        <Button
          type="button"
          handleIncrement={onIncrementNuetral}
          text="Neutral"
        />
        <Button type="button" handleIncrement={onIncrementBad} text="Bad" />
      </div>
    </React.Fragment>
  );
};

FeedbackOptions.propTypes = {
  title: PropTypes.string.isRequired,
  onIncrementGood: PropTypes.func.isRequired,
  onIncrementNuetral: PropTypes.func.isRequired,
  onIncrementBad: PropTypes.func.isRequired,
};
