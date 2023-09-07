import { Navbar } from "./Componets/Navbar/Navbar";
import './App.css'
import Intor from "./Componets/Intro/Intor";
import Services from "./Componets/Services/Services";
import Experience from "./Componets/Experience/Experience";
import Works from "./Componets/Works/Works";
import Portfolio from "./Componets/Portfolio/Portfolio";
import Testimonials from "./Componets/Testimonials/Testimonials";
import Contact from "./Componets/Contact/Contact";
import Footer from "./Componets/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="App"
    style={{
      background: darkMode ?'black':'',
      color: darkMode?'white': '',
    }}
    >
      <Navbar/>
      <Intor/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
