import './App.css';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu'
import PhotoFrame from './components/PhotoFrame/PhotoFrame';
import SocialTab from './components/SocialTab/SocialTab';
import Intro from './components/Intro/Intro';
import Home from './pages/Home/Home';
import MenuItem from './components/MenuItem/MenuItem';
import ProjectCard from './components/ProjectCard/ProjectCard';
import Project from './pages/Projects/Project';
import ContactPhoto from './components/ContactPhoto/ContactPhoto';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <MenuItem /> */}
      {/* <PhotoFrame /> */}
      {/* <SocialTab /> */}
      {/* <Intro /> */}
      {/* <Home /> */}
      {/* <Menu /> */}
      {/* <Project /> */}
      <ContactPhoto
        projectImg={61847}
        projectTech={['4', '14']}
      />
    </>
  );
}

export default App;
