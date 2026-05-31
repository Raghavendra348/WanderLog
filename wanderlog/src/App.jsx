import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ExplorePage from "./pages/ExplorePage";
import CountryDetailPage from "./pages/CountryDetailPage";
import BucketListPage from "./pages/BucketListPage";

import PrivateRoute from "./components/Layout/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/signup"
          element={<SignupPage />}
        />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <ExplorePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/country/:code"
          element={
            <PrivateRoute>
              <CountryDetailPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/bucket-list"
          element={
            <PrivateRoute>
              <BucketListPage />
            </PrivateRoute>
          }
        />

        <Route
          path="*"
          element={
            <h1 className="text-center text-3xl mt-10">
              404 Page Not Found
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;