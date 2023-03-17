import "./App.css";
import "./Login.css";
import './Admin.css'
import './Dashboard.css'
import './global.css'
import { Login } from "./Login";
import { Routes,Route } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Admin } from "./Admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='dashboard' element={<Dashboard/>}></Route>
        <Route path='admin' element={<Admin/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
