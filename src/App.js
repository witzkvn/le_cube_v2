import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar";
import HomePage from "./pages/mainPages/HomePage";
import WhyPage from "./pages/mainPages/WhyPage";
import HowPage from "./pages/mainPages/HowPage";
import VeggieChallengePage from "./pages/mainPages/VeggieChallengePage";
import ContactPage from "./pages/mainPages/ContactPage";
import VideosPage from "./pages/VideosPage";
import Footer from "./components/Footer";
import JoinPage from "./pages/mainPages/JoinPage";
import LegalPage from "./pages/LegalPage";
import ScrollToTop from "./helpers/ScrollToTop";
import AnimalsInfos from "./pages/AnimalsInfos";
import StopExploitationPage from "./pages/StopExploitationPage";
import AlimentationPage from "./pages/howPages/AlimentationPage";
import CookingPage from "./pages/howPages/CookingPage";
import SportPage from "./pages/howPages/SportPage";
import LifePage from "./pages/howPages/LifePage";
import TipsPage from "./pages/howPages/TipsPage";

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Nav />
        <div className="">
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pourquoi" element={<WhyPage />} />
              <Route path="/comment" element={<HowPage />} />
              <Route
                path="/veggie-challenge"
                element={<VeggieChallengePage />}
              />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/videos" element={<VideosPage />} />
              <Route path="/vie-des-animaux" element={<AnimalsInfos />} />
              <Route
                path="/arreter-exploitation-des-animaux"
                element={<StopExploitationPage />}
              />
              <Route path="/rejoindre" element={<JoinPage />} />
              <Route path="/alimentation" element={<AlimentationPage />} />
              <Route path="/cuisine" element={<CookingPage />} />
              <Route path="/sport" element={<SportPage />} />
              <Route path="/sante" element={<LifePage />} />
              <Route path="/conseils" element={<TipsPage />} />
              <Route path="/mentions-legales" element={<LegalPage />} />
            </Routes>
          </ScrollToTop>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
