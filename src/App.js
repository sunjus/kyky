import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReviewPage from './ReviewPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h2>Header</h2>
        <h3>Navigation</h3>
        <Routes>
          <Route path="/reviewpage" element={<ReviewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
