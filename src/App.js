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

function App() {
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
