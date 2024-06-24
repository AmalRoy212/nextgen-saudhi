import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import RegistrationFormSection from "./RegistrationFormSection";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register-form",
        element: <RegistrationFormSection />,
      },
    ],
  },
]);

const Body = () => {
  return (
    <RouterProvider router={appRouter} />
  );
};

export default Body;
