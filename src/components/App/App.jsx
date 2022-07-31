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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((100 * good) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;

    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage();

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
