import logo from './logo.svg';
import './App.scss';
import Property from './components/property/property';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from './routes';
import Header from './components/header/header';

function App() {
  return (
    <div className="App container">

      <BrowserRouter>
        <Header></Header>
        <PageRoutes></PageRoutes>
      </BrowserRouter>
    </div>
  );
}

export default App;
