import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Colaboradores from "./pages/Colaboradores";
import ControlePonto from "./pages/ControlePonto";

function App() {
  return (
    <Router>
      <div style={{ 
        display: "flex", 
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden" // Adicionado
      }}>
        <Sidebar />
        <div style={{ 
          flex: 1,
          width: "100%", // Adicionado
          overflow: "auto" // Adicionado
        }}>
          <Routes>
            <Route path="/colaboradores" element={<Colaboradores />} />
            <Route path="/controle-ponto" element={<ControlePonto />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;