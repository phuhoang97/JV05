import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import AboutProduct from "./components/AboutProduct";
import AboutUser from "./components/AboutUser";
import AboutIndex from "./components/AboutIndex";
import NotFound from "./components/NotFound";
import DemoNavigate from "./components/DemoNavigate";
import Course from "./components/DynamicRouter/Course";
import CourseDetail from "./components/DynamicRouter/CourseDetail";
import CourseDetailTypeId from "./components/DynamicRouter/CourseDetailTypeId";
import Account from "./components/ProtectedRouter/Account";
import PrivateRouter from "./components/ProtectedRouter/PrivateRouter";
import ScrollToTop from "./components/ScrollToTop";
import Person from "./components/ProtectedRouter/Person";
import Login from "./components/ProtectedRouter/Login";

function App() {
  const isActiveStyle = ({ isActive }) => ({
    color: isActive ? "rgb(182 71 71)" : "rgb(181 181 181)",
    backgroundColor: isActive ? "rgb(181 181 181)" : "rgb(182 71 71)",
  });
  return (
    <div>
      {/* Sử dụng Link */}
      {/* <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
          <ul>
            <li>
              <Link to='/about/about-product'>AboutProduct</Link>
            </li>
            <li>
              <Link to='/about/about-user'>AboutUser</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul> */}

      {/* Sử dụng NavLink */}
      <ul>
        <li>
          <NavLink to='/' style={isActiveStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' style={isActiveStyle}>
            About
          </NavLink>
          <ul>
            <li>
              <NavLink to='/about/about-product' style={isActiveStyle}>
                AboutProduct
              </NavLink>
            </li>
            <li>
              <NavLink to='/about/about-user' style={isActiveStyle}>
                AboutUser
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to='/contact' style={isActiveStyle}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Navigate */}
      <DemoNavigate />

      <ScrollToTop />

      {/* Cấu hình các Routes Route */}
      <Routes>
        {/* Route: 
        + path: đường dẫn trên url
        + element: Component tương đương với path
        */}
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}>
          {/* Cấu hình index cho route (/about) */}
          <Route index element={<AboutIndex />}></Route>
          {/* Nested Router: Cần cấu hình cho component cha => Outlet */}
          <Route path='about-product' element={<AboutProduct />}></Route>
          <Route path='about-user' element={<AboutUser />}></Route>
        </Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        {/* Dynamic Router */}
        <Route path='/course' element={<Course />}></Route>
        <Route path='/course/:id' element={<CourseDetail />}></Route>
        <Route
          path='/course/:type/:id'
          element={<CourseDetailTypeId />}
        ></Route>

        {/* Protected Router */}
        <Route path='/login' element={<Login />}></Route>
        <Route element={<PrivateRouter />}>
          <Route path='/person' element={<Person />}></Route>
          <Route path='/account' element={<Account />}></Route>
        </Route>

        {/* Báo lỗi */}
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
