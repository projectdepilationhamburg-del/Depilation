

import Cookie from 'components/Cookie/Cookie';
import Datenschutz from 'pages/Datenschutz/Datenschutz';
import Home from 'pages/Home/Home';
import Impressum from 'pages/Impressum/Impressum';
import Layout from 'pages/Layout/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
     <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>"Page not found"</div>} />
          <Route path="/datenschutz" element={<Datenschutz/>} />
          <Route path="/impressum" element={<Impressum/>} />
        </Routes>
    </Layout>
    <Cookie/>
    </BrowserRouter>
   
  )
}

export default App
