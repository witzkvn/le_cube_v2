import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar";
import HomePage from "./pages/mainPages/HomePage";
import WhyPage from "./pages/mainPages/WhyPage";
import HowPage from "./pages/mainPages/HowPage";
import ActPage from "./pages/mainPages/ActPage";
import VeggieChallengePage from "./pages/mainPages/VeggieChallengePage";
import ContactPage from "./pages/mainPages/ContactPage";
import VideosPage from "./pages/VideosPage";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <BrowserRouter>
        <Nav />
        <div className="p-6 mx-auto xl:max-w-screen-xl">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pourquoi" element={<WhyPage />} />
            <Route path="/comment" element={<HowPage />} />
            <Route path="/agir" element={<ActPage />} />
            <Route path="/veggie-challenge" element={<VeggieChallengePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/videos" element={<VideosPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
