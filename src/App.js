import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import CoverPage from "./CoverPage/cover";
import HomePage from "./Home/HomePage";
import AuthorComp from "./Author/AuthorComp";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<CoverPage></CoverPage>} />
        <Route path="/home" element={<HomePage></HomePage>} />
        <Route path="/author" element={<AuthorComp></AuthorComp>} />
      </Routes>
    </>
  );
}

export default App;
