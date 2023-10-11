import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Form from './pages/Form';
import Success from './pages/Success';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [formData, setFormData] = useState([]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/form' element={<Form setFormData={setFormData} />} />
        <Route path='/success' element={<Success formData={formData} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
