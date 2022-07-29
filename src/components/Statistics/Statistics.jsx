import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsContainer, Title, List, Item } from './Statistics.styled';
import { Notification } from '../Notification/Notification';

export const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsContainer>
      <Title>{title}</Title>
      {total > 0 ? (
        <List>
          <Item>
            Goog: <span>{good}</span>
          </Item>
          <Item>
            Neutral: <span>{neutral}</span>
          </Item>
          <Item>
            Bad: <span>{bad}</span>
          </Item>
          <Item>
            Total: <span>{total}</span>
          </Item>
          <Item>
            Positive feedback: <span>{`${positivePercentage}%`}</span>
          </Item>
        </List>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
