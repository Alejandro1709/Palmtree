import React from 'react';
import styles from '../App.module.css';

function Dashboard() {
  return (
    <div className={styles.DashboardHolder}>
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

      <div className={styles.Right}>
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
            </ul>
          </div>
          <footer className={styles.PreviewFooter}>
            <h3>PalmTree</h3>
          </footer>
        </div>
        <button className={styles.Button}>Save Changes</button>
      </div>
    </div>
  );
}

export default Dashboard;
