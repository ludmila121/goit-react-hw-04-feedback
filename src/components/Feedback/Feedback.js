import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <ul className={s.buttonList}>
        {options.map(option => (
          <li key={option}>
            <button
              className={s.button}
              type="button"
              onClick={() => onLeaveFeedback(option)}
              key={option}
              name={option}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  FeedbackOptions.propeTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  
  export default FeedbackOptions;