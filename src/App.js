import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

function App() {
  return <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact={true} element={<Dashboard />} />
        <Route path='/dashboard' exact={true} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
