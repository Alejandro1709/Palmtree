import React from 'react';
import styles from './EditorPanel.module.css';

function EditorPanel() {
  return (
    <div className={styles.Left}>
      <header className={styles.Header}>
        <h2>Editor</h2>
      </header>
      <ul className={styles.LinksList}>
        <li className={styles.Card}>
          <div className={styles.CardLeft}>
            <div className={styles.CardSpacer}></div>
            <div className={styles.CardDetails}>
              <h2>Instagram</h2>
              <p>https://www.instagram.com/</p>
            </div>
          </div>
          <button className={styles.CardRight}>Delete</button>
        </li>
      </ul>
      <button className={styles.Button}>Add Link</button>
    </div>
  );
}

export default EditorPanel;
