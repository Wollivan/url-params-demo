import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./Edit";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<p>home</p>} />
          <Route path="/about" element={<p>about</p>} />
          <Route path="/edit/:name" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
