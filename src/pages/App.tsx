import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css"
import Attack from "./Attack";
import Defense from "./Defense";
import Home from "./Home";
import Layout from '../components/layout';
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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