import React from 'react';
// import PropTypes from 'prop-types';
import {
  OptionsContainer,
  Titel,
  Button,
  Options,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, title, onLeaveFeedback }) => {
  return (
    <OptionsContainer>
      <Titel>{title}</Titel>
      <Options>
        {Object.keys(options).map(option => {
          return (
            <Button
              type="button"
              key={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </Button>
          );
        })}
      </Options>
    </OptionsContainer>
  );
};

// FeedbackOptions.propTypes = {
//   title: PropTypes.string.isRequired,
//   onIncrementGood: PropTypes.func.isRequired,
//   onIncrementNuetral: PropTypes.func.isRequired,
//   onIncrementBad: PropTypes.func.isRequired,
// };
