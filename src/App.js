//source: https://www.youtube.com/watch?v=0h2b4ftbZcU
//jsconfig.json added for javascript autoimport suggestion
import React from 'react';
import "./index.css"
import Home from './routes/Home';
import Contact from './routes/Contact';
import Projects from './routes/Projects';
import About from './routes/About';
import { Route, Routes } from '../node_modules/react-router-dom/dist/index';


function App() {
  return (
<>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/project" element={<Projects/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
</Routes>

</>
  );
}

export default App;
