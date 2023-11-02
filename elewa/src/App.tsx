import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Careers from "./components/Careers";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </Router>
      <Careers />

      <Footer />
    </main>
  );
}

export default App;
