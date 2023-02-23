import './App.css';
import NavBar from './NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Stats from './Stats/Stats';
import Betting from './Betting/Betting';
import Leaderboard from './Leaderboard/Leaderboard';
import { Box } from '@mui/system';

function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
        <Box sx={{ minHeight: '100vh', marginTop: '64px' }}>
        <Routes>
          <Route exact path="/" element={<Stats />}/>
          <Route path="/Stats" element={<Stats />}/>
          <Route path="/Betting" element={<Betting />}/>
          <Route path="/Leaderboard" element={<Leaderboard />}/>
        </Routes>
        </Box>
        </Router>
    </div>
  );
}

export default App;
