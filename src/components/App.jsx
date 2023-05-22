import { Component } from 'react';
import './App.module.scss'
import FeedbackOptions from './Feedback/Feedback';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = { 
  good: 0,
  neutral: 0,
  bad: 0,
};
 
onLeaveFeedback = name => {
  this.setState(prevState => ({
    [name]: (prevState[name]+=1),
  }));
};
countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
};
countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return Math.round((good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const onLeaveFeedback = this.onLeaveFeedback;
    const option = Object.keys(this.state);

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions options={option} onLeaveFeedback={onLeaveFeedback}></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
export default App;
  