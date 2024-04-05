import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importe o BrowserRouter e outros componentes necessários

// Importe os componentes das suas páginas
import HomePage from "./components/HomePage";
import Loja from "./components/LojaSistemas";
function App() {
  return (
    <Router>
      <Routes>
        {/* Defina as rotas para cada uma das suas páginas */}
        <Route path="/" element={<HomePage />} />
        <Route path="/loja/sistemas" element={<Loja/>} /> {/* Rota para a página inicial */}
     </Routes>
    </Router>
  );
}

export default App;
