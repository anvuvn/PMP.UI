import logo from './logo.svg';
import './App.scss';
import Property from './components/property/property';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from './routes';
import Header from './components/header/header';
import AddProperty from './components/property/add-property';
import ImagesUpload from './components/property/image-uploader';
import { ImagesViewer } from './components/property/image-viewer';

function App() {
  return (
    <div className="App container">
      <ImagesUpload></ImagesUpload>

      <ImagesViewer></ImagesViewer>

      {/* <AddProperty></AddProperty> */}
      {/* 
      <BrowserRouter>
        <Header></Header>
        <PageRoutes></PageRoutes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
