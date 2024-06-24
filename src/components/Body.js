import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import RegistrationFormSection from "./RegistrationFormSection";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register-form",
      element: <RegistrationFormSection />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
