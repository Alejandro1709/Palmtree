import React from 'react';
import FormHeader from '../FormHeader/FormHeader';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import styles from './AuthForm.module.css';

function AuthForm({ isInLogginMode, setIsInLogginMode }) {
  return (
    <div className={styles.Holder}>
      <FormHeader
        isInLogginMode={isInLogginMode}
        setIsInLogginMode={setIsInLogginMode}
      />
      {isInLogginMode ? (
        <LoginForm isInLogginMode={isInLogginMode} />
      ) : (
        <SignupForm isInLogginMode={isInLogginMode} />
      )}
    </div>
  );
}

export default AuthForm;
