import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import WelcomeSkill from "./components/WelcomeSkill";
import JoinWork from "./components/JoinWork";
import GetUpdated from "./components/GetUpdated";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import ViewAll from "./components/ViewAll";
import Backtotop from "./components/common/Backtotop";
import Loading from "./components/common/Loading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Loading />
      <Backtotop />
      <Hero />
      <WelcomeSkill />
      <JoinWork />
      <ViewAll />
      <GetUpdated />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
