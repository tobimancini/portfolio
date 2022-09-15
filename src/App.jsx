import './App.css';
import MainContainer from './Containers/MainContainer';
import AboutMe from './Containers/AboutMe';
import Knowledge from './Containers/Knowledge';
import MyProjects from './Containers/MyProjects';
import MyNavbar from './Containers/MyNavbar';


function App() {

  return (
    <div className="App">
      <MyNavbar/>
      <MainContainer />
      <AboutMe/>
      <Knowledge/>
      <MyProjects/>
    </div>
  );
}

export default App;
