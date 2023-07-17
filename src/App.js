import "./App.css";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
