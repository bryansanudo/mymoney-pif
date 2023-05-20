import Header from "@/components/header/Header";
import Details from "@/components/home/Details";

import {
  Home,
  Contact,
  Login,
  Register,
  Balance,
  Incomes,
  Spends,
} from "@/pages";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminOnlyRoute from "@/components/AdminOnlyRoute";
import Admin from "@/pages/Admin";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="bottom-center" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/publication/:id" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/incomes" element={<Incomes />} />
          <Route path="/spends" element={<Spends />} />
          <Route path="/balance" element={<Balance />} />

          <Route
            path="/admin/*"
            element={
              <AdminOnlyRoute>
                <Admin />
              </AdminOnlyRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
