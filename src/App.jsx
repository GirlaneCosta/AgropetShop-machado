import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import "./App.css";
import Navbar from "./components/Navbar";
import Servicos from "./components/Servicos";
import ServicosTosas from "./components/ServicosTosas";
import Adicionais from "./components/Adicionais";
import Produtos from "./components/produtos";
import Footer from "./components/Footer";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <Navbar />
      <Servicos />
      <ServicosTosas />
      <Adicionais />
      <Produtos />
      <Footer />

      <a
        href="https://api.whatsapp.com/message/VM7TBCNANRH7O1?autoload=1&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <FaWhatsapp />
      </a>

      <button onClick={scrollToTop} className="back-to-top">
        <FaArrowUp />
      </button>
    </div>
  );
}

export default App;
