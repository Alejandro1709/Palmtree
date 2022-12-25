import React, { useState } from 'react';
import FormFooter from '../FormFooter/FormFooter';
import styles from './SignupForm.module.css';

function SignupForm({ isInLogginMode }) {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <input
        type='text'
        id='fullName'
        placeholder='John Doe'
        value={formData.fullName}
        onChange={handleChange}
      />
      <input
        type='text'
        id='username'
        placeholder='johndoe'
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type='text'
        id='email'
        placeholder='johndoe@gmail.com'
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type='password'
        id='password'
        placeholder='*********'
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type='password'
        id='confirmPassword'
        placeholder='*********'
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <FormFooter isInLogginMode={isInLogginMode} />
    </form>
  );
}

export default SignupForm;
