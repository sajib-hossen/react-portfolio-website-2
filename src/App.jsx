import Contacts from "./components/Contacts/Contacts";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Topbar from "./components/Topbar/Topbar";
import Works from "./components/Works/Works";
import './app.scss'

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
