import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/page/Dashboard";
import Products from "./components/page/Products";
import UsersPage from "./components/page/UsersPage";
import NotFound from "./components/page/NotFound";
import LayoutSidebar from "./components/layouts/LayoutSidebar";
import AddUser from "./components/admin/AddUser";
import EditUser from "./components/admin/EditUser";

function App() {
  return (
    <div>
      <LayoutSidebar />
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/dasboard' element={<Dashboard />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/users' element={<UsersPage />}></Route>
        <Route path='/add-user' element={<AddUser />}></Route>
        <Route path='/edit-user/:id' element={<EditUser />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
