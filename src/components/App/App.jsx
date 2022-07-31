import React, { Component } from 'react';
import { Section } from './App.styled';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = label => {
    this.setState(prevState => ({ [label]: prevState[label] + 1 }));
  };

  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleIncrementNuetral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.round(
      (100 * good) / countTotalFeedback,
    );

    return (
      <React.Fragment>
        <Section>
          <FeedbackOptions
            options={this.state}
            title="Please leave feedback"
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section>
          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      </React.Fragment>
    );
  }
}
