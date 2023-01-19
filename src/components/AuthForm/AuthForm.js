import React from 'react';
import FormHeader from '../FormHeader/FormHeader';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';

function AuthForm({ isInLogginMode, setIsInLogginMode }) {
  return (
    <>
      <FormHeader
        isInLogginMode={isInLogginMode}
        setIsInLogginMode={setIsInLogginMode}
      />
      {isInLogginMode ? (
        <LoginForm isInLogginMode={isInLogginMode} />
      ) : (
        <SignupForm isInLogginMode={isInLogginMode} />
      )}
    </>
  );
}

export default AuthForm;
