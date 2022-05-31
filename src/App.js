import Resume from "./components/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Resume />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
