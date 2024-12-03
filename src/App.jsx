import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Favs from "./Pages/Favs";
import Layout from "./Layouts/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;