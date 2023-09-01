import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Prodi from './pages/Prodi';
import Mahasiswa from './pages/Mahasiswa';
import "./App.css"



function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await axios.get("https://strapi-rygs.onrender.com/api/prodis");
    console.log(res.data.data[0].attributes.prodi[0]);
    setData(res.data.data[0].attributes.prodi[0]);
  }

  useEffect(() => {
    fetchData()
  }, []);

  const generateNPM = (tahun_masuk, kode_prodi, kode_unik) => {
    const tahunMasuk = tahun_masuk.slice(-2);
    const tahunLulus = parseInt(tahunMasuk) + 4
    const kodeUnik = ("000" + kode_unik).slice(-4);
    return tahunMasuk + tahunLulus + kode_prodi + kodeUnik
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/prodi' element={<Prodi />} />
        <Route path='/mahasiswa/:id' element={<Mahasiswa />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App