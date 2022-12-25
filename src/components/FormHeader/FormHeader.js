import React from 'react';
import styles from './FormHeader.module.css';

function FormHeader({ setIsInLogginMode, isInLogginMode }) {
  return (
    <header
      className={styles.Header}
      onClick={() => setIsInLogginMode(!isInLogginMode)}
    >
      {isInLogginMode ? <span>Login</span> : <span>Sign Up</span>}
    </header>
  );
}

export default FormHeader;
