import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import './assets/css/googleOpenSan.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

const MyContext = createContext();

function App() {

  const [isToggleSidebar, setIsToggleSidebar] = useState(false)

  const values = {
    isToggleSidebar,
    setIsToggleSidebar
  }

  // useEffect(() => {
  //   alert(isToggleSidebar)
  // },[isToggleSidebar])
  return <>
    <BrowserRouter>
      <MyContext.Provider value={values}>
      <Header />
      <div className="main d-flex">
        <div className= {`sidebarWrapper ${isToggleSidebar===true ? 'toggle' : ''}`}>
          <Sidebar />
        </div>
          <div className={`content ${isToggleSidebar===true ? 'toggle' : ''}`}>
            <Routes>
                <Route path='/' exact={true} element={<Dashboard />} />
                <Route path='/dashboard' exact={true} element={<Dashboard />} />
            </Routes>
        </div>
      </div>
      </MyContext.Provider>
    </BrowserRouter>
  </>;
}

export default App;
export { MyContext };

