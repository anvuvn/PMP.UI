import './App.scss';
import { BrowserRouter, useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import PageRoutes from './routes';
import Header from './components/header/header';
import LeftPanel from './components/left/left-panel';
import { UserService } from "./service/userservice";
import { useEffect, useState } from "react";

function App() {

  return (
      <div className="App mt-2">
        <BrowserRouter>
          <div className='g-sidenav-show '>
            <LeftPanel />
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
