import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { VehiclePage } from "./components/pages/VehiclePage";
import { FavoritesPage } from "./components/pages/FavoritesPage";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

function App() {
  return (
    <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="vehicle" element={<VehiclePage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
