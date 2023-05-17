import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="vite-deploy-github">
          <Route path="introduce">
            <Route index path="about" element={<About />} />
          </Route>

          <Route path=":id" element={<Home />} />
          {/* more routes */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
