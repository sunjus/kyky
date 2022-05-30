import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import ReviewPage from './ReviewPage';
import ReviewSubmitPage from './ReviewSubmitPage';
import Footer from './Footer';

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
