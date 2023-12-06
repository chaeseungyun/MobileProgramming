import Headers from "./Headers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recommend from "./Recommend";
import SearchPage from "./SearchPage";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path="/" element={<Recommend />} />
        <Route path="/search/:input" element={<SearchPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
