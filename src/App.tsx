import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CardQuote } from "./components/quote/CardQuote";
import "./index.css";
import { Layout } from "./components/layout/Layout";
import Characters from "./pages/Characters";
import Quote from "./pages/Quote";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="characters" element={<Characters />} />
          <Route path="quote" element={<Quote />} />
        </Route>
      </Routes>
      <div className="App"></div>
    </BrowserRouter>
  );
}

export default App;
