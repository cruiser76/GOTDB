import React, {Fragment} from 'react';
import img from './error.jpg';

const ErrorMessage = () => {
  return (
    <Fragment>
      <span style={{display: 'block', margin: "0 auto", color: 'white', fontSize: '1.5rem', textAlign: 'center'}}>Somthing goes wrong</span>
      <img src={img} style={{width: '100%'}} alt="error"/>
    </Fragment>
  )
};

export default ErrorMessage;
