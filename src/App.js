import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar";
import HomePage from "./pages/mainPages/HomePage";
import WhyPage from "./pages/mainPages/WhyPage";
import HowPage from "./pages/mainPages/HowPage";
import ActPage from "./pages/mainPages/ActPage";
import VeggieChallengePage from "./pages/mainPages/VeggieChallengePage";
import ContactPage from "./pages/mainPages/ContactPage";
import VideosPage from "./pages/VideosPage";
import Footer from "./components/Footer";
import JoinPage from "./pages/JoinPage";
import LegalPage from "./pages/LegalPage";

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Nav />
        <div className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pourquoi" element={<WhyPage />} />
            <Route path="/comment" element={<HowPage />} />
            <Route path="/agir" element={<ActPage />} />
            <Route path="/veggie-challenge" element={<VeggieChallengePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/rejoindre" element={<JoinPage />} />
            <Route path="/mentions-legales" element={<LegalPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
