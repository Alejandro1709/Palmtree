import React from 'react';
import styles from './FormFooter.module.css';

function FormFooter({ isInLogginMode }) {
  return (
    <footer className={styles.Footer}>
      <button className={styles.Submit} type='submit'>
        {isInLogginMode ? 'Login' : 'Create Account'}
      </button>
    </footer>
  );
}

export default FormFooter;
