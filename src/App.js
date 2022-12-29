import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar";
import HomePage from "./pages/mainPages/HomePage";
import WhyPage from "./pages/mainPages/WhyPage";
import HowPage from "./pages/mainPages/HowPage";
import ContactPage from "./pages/mainPages/ContactPage";
import Footer from "./components/Footer";
import JoinPage from "./pages/mainPages/JoinPage";
import LegalPage from "./pages/LegalPage";
import ScrollToTop from "./helpers/ScrollToTop";
import AnimalsInfos from "./pages/AnimalsInfos";
import LinksPage from "./pages/LinksPage";

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
                element={
                  <LinksPage
                    title="Veggie challenge"
                    fetchId="veggiechallenge"
                  />
                }
              />
              <Route path="/contact" element={<ContactPage />} />
              <Route
                path="/videos"
                element={
                  <LinksPage
                    title="Films & Vidéos"
                    fetchId="videoPage"
                    description={
                      <>
                        <p>
                          Les animaux sont des individus sensibles, ils
                          ressentent la peur, la douleur et le plaisir.
                        </p>
                        <p className="mb-12">
                          Ils éprouvent des émotions, ont des désirs, et leur
                          vie compte pour eux. Ils sont pourtant traités comme
                          des marchandises, entassés dans des élevages et tués à
                          la chaine.
                        </p>
                      </>
                    }
                  />
                }
              />

              <Route path="/vie-des-animaux" element={<AnimalsInfos />} />
              <Route
                path="/arreter-exploitation-des-animaux"
                element={
                  <LinksPage
                    title="Pourquoi ne plus exploiter les animaux ?"
                    fetchId="ethicLink"
                  />
                }
              />
              <Route path="/rejoindre" element={<JoinPage />} />
              <Route
                path="/alimentation"
                element={
                  <LinksPage
                    title="Besoins Alimentaires"
                    fetchId="alimentationLink"
                  />
                }
              />
              <Route
                path="/cuisine"
                element={
                  <LinksPage title="Cuisiner Végétal" fetchId="cooking" />
                }
              />
              <Route
                path="/sport"
                element={
                  <LinksPage title="Pour les sportifs" fetchId="sport" />
                }
              />
              <Route
                path="/sante"
                element={
                  <LinksPage
                    title="Une alimentation adaptée pour tous"
                    fetchId="health"
                  />
                }
              />
              <Route
                path="/conseils"
                element={
                  <LinksPage title="Conseils Pratiques" fetchId="tips" />
                }
              />
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
