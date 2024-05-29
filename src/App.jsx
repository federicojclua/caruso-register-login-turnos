import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './page/Login';
import Programa from './page/Programa';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'; 
import Registro from "./page/Registro";
import Principal from './page/Principal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/Programa"
          element={<ProtectedRoute element={<Programa />} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
