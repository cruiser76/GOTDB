import React from 'react';
import {Button, FormGroup, Label} from 'reactstrap';
import {reduxForm, Field} from 'redux-form';
import {minLengthCreator, requiredField, checkEmail} from '../../../utils/validators.js';
import {Input} from '../../formFields/formFields.js';
import './loginPage.scss';

const minLength8 = minLengthCreator(8);

const LoginForm = (props) => {
  console.log(props);
  return (
    <form onSubmit={props.handleSubmit}>
      <FormGroup>
        <Label for="login-email">Email<sup>*</sup></Label>
        <Field
          component={Input}
          type="email"
          name="email"
          id="login-email"
          className="form-control"
          placeholder="enter email"
          validate={[requiredField, checkEmail]}
        />
      </FormGroup>
      <FormGroup>
        <Label for="login-password">Password<sup>*</sup></Label>
        <Field
          component={Input}
          type="password"
          name="password"
          id="login-password"
          className="form-control"
          placeholder="enter password"
          validate={[requiredField, minLength8]}
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Field
            component={'input'}
            type="checkbox"
            name='remember-me'
          />{' '}
          remember me
        </Label>
      </FormGroup>
      <Button outline color='info'>Login</Button>
      <div className='note'><sup>*</sup>marked fields are required</div>
    </form>
  )
};

const WrappedReduxForm = reduxForm({form: 'login'})(LoginForm);

const LoginPage = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  }
  return (
    <div className='login-form'>
      <h1>Please, login</h1>
      <WrappedReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default LoginPage;
