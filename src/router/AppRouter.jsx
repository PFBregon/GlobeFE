import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { UserProfile } from "../pages/UserProfile";
import { Contact } from "../pages/Contact";
import { Search } from "../pages/Search";
import { Menu } from "../pages/Menu";
import { Notifications } from "../pages/Notifications";


export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/UserProfile" element={<UserProfile />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Search" element={<Search />} />
    <Route path="/Menu" element={<Menu />} />
    <Route path="/notifications" element={<Notifications />} />
  </Routes>
);
