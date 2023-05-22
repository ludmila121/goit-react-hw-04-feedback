import React from 'react';
import PropTypes from 'prop-types';
import {Container} from './Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <Container>
        {Object.keys(options).map(option => (
          <li key={option}>
            <button
              type="button"
              onClick={() => onLeaveFeedback(option)}
              key={option}
              name={option}
            >
              {option}
            </button>
          </li>
        ))}
      </Container>
    );
  };
  
  FeedbackOptions.propeTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  
  export default FeedbackOptions;