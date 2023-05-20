import './App.css';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu'
import PhotoFrame from './components/PhotoFrame/PhotoFrame';
import SocialTab from './components/SocialTab/SocialTab';
import Intro from './components/Intro/Intro';
import Home from './pages/Home/Home';
import MenuItem from './components/MenuItem/MenuItem';
import ProjectCard from './components/ProjectCard/ProjectCard';

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
      <ProjectCard
        heading='ParkNow'
        body='ParkNow is a web-based application designed to streamline and automate the process of managing vehicle parking by just one click. It provides a convenient and efficient solution for users, ensuring a smooth parking experience for all.'
        isVisit={true}
      />
    </>
  );
}

export default App;
