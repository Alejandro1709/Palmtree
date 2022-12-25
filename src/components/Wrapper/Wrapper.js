import React from 'react';
import styles from './Wrapper.module.css';

function Wrapper({ children }) {
  return <div className={styles.Wrapper}>{children}</div>;
}

export default Wrapper;
