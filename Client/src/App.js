import logo from './logo.svg';
import './App.css';
import Login from './screen/login/Login';
import Home from './screen/home/Home';
import AppRoute from './route/AppRoute';

function App() {
  return (
    <div className="App">
      <AppRoute />
    </div>
  );
}

export default App;
