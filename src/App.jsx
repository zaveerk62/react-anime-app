import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AnimePage from './pages/AnimePage';
import Homepage from './pages/Homepage';




const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='anime/:id' element={<AnimePage />} />
      </Routes>
    </Router>
  );
};

export default App;

