import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Dashboard from "./Dashboard";
import RegistrationFormSection from "./RegistrationFormSection";
import Header from "./Header";

// Simulated authentication function
const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};

const PrivateRoute = ({ element: Element }) => {
  return isAuthenticated() ? <Element /> : <Navigate to="/event/admin" />;
};

const Body = () => {
  return (
    <div className="bg-[#000814] flex flex-col min-h-screen w-screen">
      <Header />
      <RegistrationFormSection />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/event/register-form" ,
    element: <Body />,
  },
  {
    path: "/event",
    element: <Home />,
  },
  {
    path: "/event/admin",
    element: <Admin />,
  },
  {
    path: "/event/admin/dashboard",
    element: <PrivateRoute element={Dashboard} />,
  },
]);

function MainApp() {
  return <RouterProvider router={appRouter} />;
}

export default MainApp;
