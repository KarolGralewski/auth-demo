import { useIsAuthenticated } from '@azure/msal-react';
import './App.css';
import { Login } from './components/Login';
import Profile from './components/Profile';

function App() {
	const isAuthenticated = useIsAuthenticated();

	return <div className="App">{isAuthenticated ? <Profile /> : <Login />}</div>;
}

export default App;
