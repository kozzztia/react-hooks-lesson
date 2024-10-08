import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter basename='/react-hooks-lesson/'>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/deposits" element={<h2>Deposits</h2>} />
          <Route path="/offers" element={<h2>offers</h2>} />
          <Route path="/settings" element={<h2>settings</h2>} />
          <Route path="/payments" element={<h2>payments</h2>} />
          <Route path="/active" element={<h2>active</h2>} />
          <Route path="/closed" element={<h2>closed</h2>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App
