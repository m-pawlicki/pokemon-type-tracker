import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css"
import Attack from "./Attack";
import Defense from "./Defense";
import Home from "./Home";
import NotFound from "./NotFound";
import Layout from '../components/layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="atk" element={<Attack />} />
          <Route path="def" element={<Defense />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;