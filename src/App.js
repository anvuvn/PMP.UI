import logo from './logo.svg';
import './App.scss';
import Property from './components/property/property';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from './routes';
import Header from './components/header/header';
import LeftPanel from './components/left/left-panel';
import PropertyFilter from './components/property/property-filter';

function App() {
  return (
    <div className="App mt-2">
      {/* <PropertyFilter></PropertyFilter> */}
      <BrowserRouter>
        <div className='g-sidenav-show '>
          <LeftPanel></LeftPanel>
          <main className='main-content py-4'>
            <Header className="mb-5"></Header>
            <PageRoutes></PageRoutes>
          </main>
        </div>


      </BrowserRouter>
    </div>
  );
}

export default App;
