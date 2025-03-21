import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import Reservation from "./pages/Reservation/Reservation.jsx";
import Gallery from "./pages/Gallery.jsx";
import Review from "./pages/Review.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Blog from "./pages/Blog.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
