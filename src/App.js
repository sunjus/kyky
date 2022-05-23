import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Review from './Review';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h2>Header</h2>
        <h3>Navigation</h3>
        <Routes>
          <Route path="/review" element={<Review />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
