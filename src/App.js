import Wrapper from './components/Wrapper/Wrapper';
import styles from './App.module.css';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Wrapper>
      <div className={styles.Content}>
        {/* <AuthPage /> */}
        <DashboardPage />
      </div>
    </Wrapper>
  );
}

export default App;
