import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Active from './pages/Active/Active';
import Closed from './pages/Closed/Closed';
import Deposits from './pages/Deposits/Deposits';
import DepositDetails from './pages/DepositDetails/DepositDetails';

function App() {
  return (
    <BrowserRouter basename='/react-hooks-lesson/'>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deposits" element={<Deposits />} />
          <Route path="/deposits/:id" element={<DepositDetails />} />
          <Route path="/offers" element={<h2>offers</h2>} />
          <Route path="/settings" element={<h2>settings</h2>} />
          <Route path="/payments" element={<h2>payments</h2>} />
          <Route path="/active" element={<Active />} />
          <Route path="/closed" element={<Closed />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App
