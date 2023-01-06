import React from 'react';
import EditorPanel from './EditorPanel';
import PreviewPanel from './PreviewPanel';
import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <div className={styles.DashboardHolder}>
      <EditorPanel />
      <PreviewPanel />
    </div>
  );
}

export default Dashboard;
