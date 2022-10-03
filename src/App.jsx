import './App.css';
import MainContainer from './Containers/MainContainer';
import AboutMe from './Containers/AboutMe';
import Knowledge from './Containers/Knowledge';
import MyProjects from './Containers/MyProjects';
import MyNavbar from './Containers/MyNavbar';
import ContactForm from './Containers/ContactForm';
import Footer from './Containers/Footer';
import { useEffect, useState } from 'react';
import ToolsProvider from './Context';


function App() {

  const [time, setTime] = useState("");

    let date;

    useEffect(() => {
        date = new Date();
        if (date.getHours() >= 6 && date.getHours() <= 18) {
            setTime("day");
            console.log(date.getHours());
        } else {
            setTime("night");
            console.log(date.getHours());
        }
    }, []);

    window.setInterval(() => {
        date = new Date();
        if (date.getHours() >= 6 && date.getHours() <= 18) {
            setTime("day");
        } else {
            setTime("night");
        }
    }, 60000);

  return (
    <ToolsProvider time={time} setTime={setTime}>

      <div className={time === "day" ? "App day" : "App night"}>
        <MyNavbar />
        <MainContainer />
        <AboutMe />
        <Knowledge />
        <MyProjects />
        <ContactForm />
        <Footer />
      </div>

    </ToolsProvider>
  );
}

export default App;
