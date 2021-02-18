import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import { ContactContainer, ContactTitle } from './contact.styles';

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    message: '',
    email: '',
    subject: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, message, email, subject } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <ContactContainer>
      <div>
        <h2>Covid-19 update</h2>
        <p>
          Currently, we expect to deliver most orders within 5-10 days, subject
          to our delivery providers maintaining their current speed of delivery.
          We’re sorry, as some orders may take a little longer to arrive due to
          the social distancing measures we’ve put in place to maintain the
          personal safety of our warehouse teams, and logistics partners. We’re
          working hard to return to our usual delivery timeframe of 3-7 days and
          we’d appreciate your support in waiting the current delivery time of
          10 days, and checking the order status within My Account, before
          calling or emailing about your order.
          <br />
          <br />
          Thank you for your patience and understanding.
        </p>
        <ContactTitle>How can we help?</ContactTitle>
        <span>Email Us</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            label="Customer Name"
            required
          />
          <FormInput
            type="text"
            name="subject"
            value={subject}
            onChange={handleChange}
            label="Subject"
            required
          />
          <FormInput
            type="text"
            name="message"
            value={message}
            onChange={handleChange}
            label="Message"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
            required
          />
          <CustomButton type="submit">Submit</CustomButton>
        </form>
      </div>
    </ContactContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
