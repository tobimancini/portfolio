import './App.css';
import MainContainer from './Containers/MainContainer';
import AboutMe from './Containers/AboutMe';
import Knowledge from './Containers/Knowledge';
import MyProjects from './Containers/MyProjects';
import MyNavbar from './Containers/MyNavbar';
import ContactForm from './Containers/ContactForm';
import Footer from './Containers/Footer';


function App() {

  return (
    <div className="App">
      <MyNavbar/>
      <MainContainer />
      <AboutMe/>
      <Knowledge/>
      <MyProjects/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
