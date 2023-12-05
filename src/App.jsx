import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Failed from "./pages/Failed/Failed"
import Success from "./pages/Success/Success"
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home/> } exect/>
        <Route path="/failed" element={<Failed/> } exect/>
        <Route path="/success" index element={<Success/> } exect/>
      </Routes>
    </>
  );
}

export default App;
