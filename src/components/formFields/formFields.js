import React from 'react';
import './formFields.scss';

export const Input = ({input, meta, ...props}) => {
  const {touched, error} = meta;
  let className = 'field';

  if (error && touched) {
    className += ` field--error`
  }

  return (
    <div className={className}>
      <input {...input} {...props} />
      <span>{error}</span>
    </div>
  );
};
