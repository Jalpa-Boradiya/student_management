import logo from './logo.svg';
import './App.css';
import Login from './screen/login/Login';
import Home from './screen/home/Home';
import AppRoute from './route/AppRoute';
import Sum from '../src/unittesting/sum/Sum'

function App() {
  return (
    <div className="App">
      <AppRoute />
      <Sum />
    </div>
  );
}

export default App;
