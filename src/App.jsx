import "./App.css";
import { lazy } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider } from "auth/AuthProvider";
import { Layout } from "layout";
import { lazyLoad } from "utils/lazyLoad";

const NotFound = lazyLoad(import("pages/notfound"))
const Home = lazyLoad(import("pages/home"), "Home")
const LoginPage = lazy(() => import("pages/login"))
const ProtectedPage = lazy(() => import("pages/protected"))
const RequireAuth = lazy(() => import("auth/RequireAuth"))


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="public" element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}


export default App;
