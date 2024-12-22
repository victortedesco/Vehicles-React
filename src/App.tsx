import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { VehiclePage } from "./components/pages/VehiclePage";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="vehicle" element={<VehiclePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
