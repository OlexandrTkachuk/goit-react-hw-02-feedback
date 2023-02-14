import React from 'react';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseGoodCount = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  increaseNeutralCount = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  increaseBadCount = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = Math.round((good / total) * 100);

    return (
      <div className="Container">
        <h2 className="Title">Please leave feedback</h2>
        <ul className="ButtonList">
          <li className="Item">
            <button
              type="button"
              className="Button Green"
              onClick={this.increaseGoodCount}
            >
              Good
            </button>
          </li>

          <li className="Item">
            <button
              type="button"
              className="Button Orangered"
              onClick={this.increaseNeutralCount}
            >
              Neutral
            </button>
          </li>

          <li className="Item">
            <button
              type="button"
              className="Button Red"
              onClick={this.increaseBadCount}
            >
              Bad
            </button>
          </li>
        </ul>
        <h2 className="Title">Statistics</h2>
        <ul className="StatList">
          <li className="StatItem">
            <p className="StatText">Good: {good}</p>
          </li>
          <li className="StatItem">
            <p className="StatText">Neutral: {neutral}</p>
          </li>
          <li className="StatItem">
            <p className="StatText">Bad: {bad}</p>
          </li>
          <li className="StatItem">
            <p className="StatText">Total: {total}</p>
          </li>

          <li className="StatItem">
            <p className="StatText">
              Positive feedback: {total > 0 ? positivePercentage : '0'}%
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
