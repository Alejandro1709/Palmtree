import React from 'react';
import styles from './PreviewPanel.module.css';

function PreviewPanel() {
  return (
    <aside className={styles.Right}>
      <header className={styles.Header}>
        <h2>Live Preview</h2>
      </header>
      <div className={styles.Preview}>
        <div className={styles.PreviewHeader}>
          <h2>@username</h2>
        </div>
        <div className={styles.PreviewBody}>
          <ul>
            <li>Instagram</li>
            <li>Instagram</li>
            <li>Instagram</li>
            <li>Instagram</li>
            <li>Instagram</li>
            <li>Instagram</li>
          </ul>
        </div>
        <footer className={styles.PreviewFooter}>
          <h3>PalmTree</h3>
        </footer>
      </div>
      <button className={styles.Button}>Save Changes</button>
    </aside>
  );
}

export default PreviewPanel;
