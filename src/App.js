import { useState } from 'react';
import Wrapper from './components/Wrapper/Wrapper';
import AuthForm from './components/AuthForm';
import FormLogger from './components/FormLogger/FormLogger';
import styles from './App.module.css';

function App() {
  const [isInLogginMode, setIsInLogginMode] = useState(true);

  return (
    <Wrapper>
      <div className={styles.Content}>
        <AuthForm
          isInLogginMode={isInLogginMode}
          setIsInLogginMode={setIsInLogginMode}
        />
        <FormLogger />
      </div>
    </Wrapper>
  );
}

export default App;
