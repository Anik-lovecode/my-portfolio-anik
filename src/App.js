import About from "./component1/About";
import Contact from "./component1/Contact";
import Experience from "./component1/Experience";
import Home from "./component1/Home";
import NavBar from "./component1/NavBar";
import Portfolio from "./component1/Portfolio";
import SocialLinks from "./component1/SocialLinks";
import Travel from "./component1/Travel";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio/>
      <Experience/>
      <Travel/>
  
      <Contact/>
      <SocialLinks/>
      
      
    </div>
  );
}
export default App;
