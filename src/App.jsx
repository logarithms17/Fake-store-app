import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SharedLayout from "./pages/SharedLayout";
import ErrorPage from "./pages/ErrorPage";
import ShopPage from "./pages/ShopPage";
import WelcomePage from "./pages/WelcomePage";
import AuthPage from "./pages/AuthPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="login" element={<AuthPage />} />
        <Route path="register" element={<AuthPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
      </Route>

      <Route
        path="*"
        element={<ErrorPage message="Page Not Found" status="404" />}
      />
    </Routes>
  );
};

export default App;
