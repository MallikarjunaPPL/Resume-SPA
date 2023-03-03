import Header from "./Components/Header/header"
import './App.css';
import Home from "./Components/Home/home"
import Logout from "./Components/Logout/log"
import Profile from "./Components/Profile/profile"
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    
      <Header/>
      <div className='main_cont'>
     <Routes>
    
     <Route exact path="/home" element={  <Home />}/>
     <Route exact path="/profile" element={  <Profile/>}/>
     <Route exact path="/logout" element={  <Logout/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
