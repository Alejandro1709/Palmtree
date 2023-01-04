import React, { useState } from 'react';
import FormFooter from '../FormFooter/FormFooter';
import styles from './LoginForm.module.css';

function LoginForm({ isInLogginMode }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className={styles.Form} onSubmit={handleSubmit} autoComplete={false}>
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
      <FormFooter isInLogginMode={isInLogginMode} />
    </form>
  );
}

export default LoginForm;
