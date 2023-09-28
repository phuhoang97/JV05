import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import UsersPage from "./components/UsersPage";

function App() {
  return (
    <div>
      <Sidebar />

      <Routes>
        <Route path='/users' element={<UsersPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
