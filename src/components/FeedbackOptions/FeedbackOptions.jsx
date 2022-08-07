import React from 'react';
import PropTypes from 'prop-types';
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

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
