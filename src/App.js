import '../src/assets/globalCss/global.css';
import { Route, Routes } from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import Dashboard from './Views/Dashboard/Dashboard';

function App() {
  return (
    <Routes>
       <Route path="/sign-up" element={<SignUp/>} />
       <Route path="/sign-in" element={<SignIn />} />
       <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
  );
}

export default App;
