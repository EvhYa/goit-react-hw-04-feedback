import { useState } from 'react';
// import { FeadbackForm } from './FeadbackForm/FeadbackForm';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export function App() {
  const good = useState(0);
  const neutral = useState(0);
  const bad = useState(0);

  const optionsHandlers = {
    good: good,
    neutral: neutral,
    bad: bad,
  };

  const countTotalFeedback = () => good[0] + neutral[0] + bad[0];

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? Math.round((good[0] / countTotalFeedback()) * 100)
      : 0;
  };

  return (
    <>
      <GlobalStyle />
      <Section title="Please leave feadback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          optionsHandlers={optionsHandlers}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good[0]}
            neutral={neutral[0]}
            bad={bad[0]}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
