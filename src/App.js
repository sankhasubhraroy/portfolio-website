import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu'
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {

  const [theme, setTheme] = useState(true);

  const toggleMode = () => {
    setTheme(!theme)
    document.documentElement.setAttribute("data-theme", theme ? "dark" : "light")
  }

  return (
    <div className="App" data-theme={theme ? "dark" : "light"} >
      <Navbar value={theme} change={toggleMode} />
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="projects" element={<Projects />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
