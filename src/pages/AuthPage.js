import { useState } from 'react';
import AuthForm from '../components/AuthForm';
import FormLogger from '../components/FormLogger/FormLogger';

function AuthPage() {
  const [isInLogginMode, setIsInLogginMode] = useState(true);

  return (
    <>
      <AuthForm
        isInLogginMode={isInLogginMode}
        setIsInLogginMode={setIsInLogginMode}
      />
      <FormLogger />
    </>
  );
}

export default AuthPage;
