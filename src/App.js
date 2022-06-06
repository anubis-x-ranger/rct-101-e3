import "./App.css";
import {Route,Routes} from 'react-router-dom';
import Home from "./pages/Home";
import RequiredAuth from "./hoc/RequiredAuth";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<RequiredAuth><Home/></RequiredAuth>} ></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      {
        // Code here
      }
    </div>
  );
}

export default App;
