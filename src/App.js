import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import CoverPage from "./CoverPage/cover";
import HomePage from "./Home/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<CoverPage></CoverPage>} />
        <Route path="/home" element={<HomePage></HomePage>} />
      </Routes>
    </>
  );
}

export default App;
