import Headers from "./Headers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recommend from "./Recommend";
import SearchPage from "./SearchPage";
import Footer from "./Footer";
import FavoriteList from "./FavoriteList";

function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path="/" element={<Recommend />} />
        <Route path="/search/:input" element={<SearchPage />} />
        <Route path="/favorite" element={<FavoriteList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
