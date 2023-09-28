import "./App.css";
import HomePage from "./components/page/HomePage/HomePage";
import AboutPage from "./components/page/AboutPage/AboutPage";
import ContactPage from "./components/page/ContactPage/ContactPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/contact' element={<ContactPage />}></Route>
    </Routes>
  );
}

export default App;
