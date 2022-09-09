import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import CoverPage from "./CoverPage/cover";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<CoverPage></CoverPage>} />
      </Routes>
    </>
  );
}

export default App;
