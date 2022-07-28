import React, { Component } from "react";
import { Button } from "../Button/Button";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  handleIncrementNuetral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleIncrementBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    const countTotalFeedback = good + neutral + bad;

    const countPositiveFeedbackPercentage = Math.round(
      (100 * good) / countTotalFeedback
    );

    return (
      <React.Fragment>
        <section>
          <h2>Please leave feedback</h2>
          <div>
            <Button
              type="button"
              handleIncrement={this.handleIncrementGood}
              text="Good"
            />
            <Button
              type="button"
              handleIncrement={this.handleIncrementNuetral}
              text="Neutral"
            />
            <Button
              type="button"
              handleIncrement={this.handleIncrementBad}
              text="Bad"
            />
          </div>
        </section>
        <section>
          <h2>Statistics</h2>
          <p>
            Goog: <span>{good}</span>
          </p>
          <p>
            Neutral: <span>{neutral}</span>
          </p>
          <p>
            Bad: <span>{bad}</span>
          </p>
          <p>
            Total: <span>{countTotalFeedback}</span>
          </p>
          <p>
            Positive feedback:{" "}
            <span>{`${countPositiveFeedbackPercentage}%`}</span>
          </p>
        </section>
      </React.Fragment>
    );
  }
}
