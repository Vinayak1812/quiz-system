import './App.css';
import { IconName } from "react-icons/ai";
import SideNavbar from './component/SideNavbar';
import TopNav from './component/TopNav';
import { useState } from 'react';
import MainScreen from './component/MainScreen';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  function handleSide(stateUpdater) {
    stateUpdater(prevState => !prevState);
  }
  return (
    <div className='home-page'>
      <TopNav className="top-nav" toggleSidebar={() => handleSide(setSidebarOpen)} />
      <div className="content">
        <div className="sidenav">
          <SideNavbar isOpen={isSidebarOpen} />
        </div>
        <div className="main-page">
          <MainScreen />
        </div>
      </div>
    </div>
  );
}

export default App;
