import React, { useState } from 'react';
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions'
import SectionTitle from '../SectionTitle/SectionTitle'
import { countTotalFeedback, countPositiveFeedbackPercentage } from '../StatisticsCounter/StatisticsCounter'
import Notification from '../Notification/Notification'

const Feedback = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = type => {
    setFeedback(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1
    }));
  }

  const { good, neutral, bad } = feedback;
  const total = countTotalFeedback(feedback);
  const positivePercentage = countPositiveFeedbackPercentage(feedback);

  return (
    <div>
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </SectionTitle>
      {total > 0 ? (
        <SectionTitle title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </SectionTitle>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}

export default Feedback;



     
    
    
