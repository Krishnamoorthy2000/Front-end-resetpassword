import './App.css';
import Login from './components/login';
import ForgotPassword from './components/forgotpassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import ResetPassword from './components/resetpassword';
export const url = "https://password-reset-fvos.onrender.com"




function App() {
  return (
    <div>
      <Router>
      <Routes>
       <Route path='/login' element={<Login />}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path='/forgotpassword' element={<ForgotPassword />}/>
       <Route path='/forgotpassword/resetpassword/:token' element={<ResetPassword/>}/>
       <Route path="/" element={<Dashboard/>}/>

      </Routes>
      </Router>

    </div>
  );
}
export default App;
