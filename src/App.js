import Wrapper from './components/Wrapper/Wrapper';
import styles from './App.module.css';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Wrapper>
      <div className={styles.Content}>
        {/* <AuthPage /> */}
        <Dashboard />
      </div>
    </Wrapper>
  );
}

export default App;
