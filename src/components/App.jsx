import { useState } from 'react';
import './App.css'
import FeedbackOptions from './Feedback/Feedback';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import { AppContainer } from './App.styled';

export default function App()  {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad]= useState(0);

 const  onLeaveFeedback = name => {
  switch (name){
    case 'good':
      setGood (prevGood => prevGood +=1);
      break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral +1);
        break;
        case 'bad':
          setBad (prevBad => prevBad +1);
          break;
          default:
            break;
  }
};
 
const  countTotalFeedback = () => good + neutral + bad; 
const  countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  
    return (
      <AppContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions options={{good,neutral, bad}} onLeaveFeedback={onLeaveFeedback}></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
     </AppContainer>
    );
  }

  