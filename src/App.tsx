import Header from './components/Header/Header';
import Main from './components/Main/Main';
import useUsersWithTodos from './hooks/useUsersWithTodos';
import './styles/app.css';

function App() {
  const { usersData, loading, error } = useUsersWithTodos();

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="app-wrapper">
      <Header />
      <Main users={usersData} />
    </div>
  );
}

export default App;
