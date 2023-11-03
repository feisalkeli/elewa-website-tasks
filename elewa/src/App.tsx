import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AboutLayout from "./components/About/AboutLayout";

function App() {
  return (
    <main>
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<AboutLayout />} />
        </Routes>
      </Router>

      <Footer />
    </main>
  );
}

export default App;
