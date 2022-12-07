import './css/App.css';
import './css/responsive.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';

function App() {

  return (
  <Router>
      <Routes>
       <Route path='/' element={<LandingPage/>}/>
       <Route path='*' element={<NotFound/>}/>
      </Routes> 
  </Router>
  );
}
 
export default App;
