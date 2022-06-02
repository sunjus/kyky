import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ReviewPage from './components/ReviewPage';
import ReviewSubmitPage from './components/ReviewSubmitPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/reviewpage" element={<ReviewPage />} />
          <Route path="/reviewsubmitpage" element={<ReviewSubmitPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
