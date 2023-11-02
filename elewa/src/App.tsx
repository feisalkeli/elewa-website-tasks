import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <Header />

      <Router>
        <Routes></Routes>
      </Router>

      <Footer />
    </main>
  );
}

export default App;
