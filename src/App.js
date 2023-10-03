import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import RoutesList from './RoutesList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
