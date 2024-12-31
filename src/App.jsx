import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/Navbar";
import Footer from "./assets/Footer";
import { Suspense, lazy } from "react";
import Loading from './assets/Loading';

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;