import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Chatbot from "./pages/Chatbot";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Adminpanel from "./pages/Adminpanel";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Adminpanel" element={<Adminpanel />} />
      <Route path="/Chatbot" element={<Chatbot />} />
    </Routes>
    </BrowserRouter>
  )
}
