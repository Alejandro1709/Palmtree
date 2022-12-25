import React from 'react';
import styles from './FormLogger.module.css';

function FormLogger() {
  return (
    <div className={styles.Messages}>
      <div className={styles.Message}>
        <p className='Messages__Text'>Error</p>
      </div>
      <div className={styles.Message}>
        <p className='Messages__Text'>Error</p>
      </div>
      <div className={styles.Message}>
        <p className='Messages__Text'>Error</p>
      </div>
    </div>
  );
}

export default FormLogger;
