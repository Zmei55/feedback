import React from "react";
import PropTypes from "prop-types";
import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsList,
  StatisticsListItem,
} from "./Statistics.styled";

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
      <StatisticsTitle>{title}</StatisticsTitle>
      <StatisticsList>
        <StatisticsListItem>
          Goog: <span>{good}</span>
        </StatisticsListItem>
        <StatisticsListItem>
          Neutral: <span>{neutral}</span>
        </StatisticsListItem>
        <StatisticsListItem>
          Bad: <span>{bad}</span>
        </StatisticsListItem>
        <StatisticsListItem>
          Total: <span>{total}</span>
        </StatisticsListItem>
        <StatisticsListItem>
          Positive feedback: <span>{`${positivePercentage}%`}</span>
        </StatisticsListItem>
      </StatisticsList>
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
