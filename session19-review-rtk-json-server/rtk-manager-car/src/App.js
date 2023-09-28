import "./App.css";
import CarList from "./components/CarList";
import CarForm from "./components/CarForm";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/admin/cars' element={<CarList />}></Route>
        <Route path='/admin/cars/add' element={<CarForm />}></Route>
        {/* <Route path='/admin/cars/edit/:id' element={<CarForm />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
