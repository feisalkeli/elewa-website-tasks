import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AboutLayout from "./components/SocialImpactPage/AboutLayout";
import InvestLayout from "./components/InvestPage/InvestLayout";
import AboutUsLayout1 from "./components/AboutUsPage/AboutUsLayout1";

function App() {
  return (
    <main className="">
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<AboutLayout />} />
          <Route path="/about" element={<AboutUsLayout1 />} />
          <Route path="/social-impact" element={<AboutLayout />} />
          <Route path="/invest-page" element={<InvestLayout />} />
        </Routes>
      </Router>

      <Footer />
    </main>
  );
}

export default App;
