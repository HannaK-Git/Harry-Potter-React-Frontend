import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import CoverPage from "./CoverPage/cover";
import HomePage from "./Home/HomePage";
import AuthorComp from "./Author/AuthorComp";
import MainCharComp from "./MainCharacter/MainCharComp";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<CoverPage></CoverPage>} />
        <Route path="/home" element={<HomePage></HomePage>} />
        <Route path="/author" element={<AuthorComp></AuthorComp>} />
        <Route path="/mainchar" element={<MainCharComp></MainCharComp>} />
      </Routes>
    </>
  );
}

export default App;
