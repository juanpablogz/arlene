import './App.css';
import { UserProvider } from './context/UserContext';
import { AppRouter } from './routers/AppRouter';
function App() {
  return (
    <div>
      <UserProvider>
        <AppRouter/>
      </UserProvider>
    </div>
  );
}

export default App;