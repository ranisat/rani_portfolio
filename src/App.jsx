import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import  'animate.css'
import Home from "./containers/Home";
import About from "./containers/About";
import Skills from "./containers/Skills";
import Portfolio from "./containers/Portfolio";
import Resume from "./containers/Resume";
import Contact from "./containers/Contact";

function App() {
  const pageSize=15;
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
