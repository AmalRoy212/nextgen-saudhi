import {RouterProvider, createBrowserRouter } from "react-router-dom";
// import Layout from "./Layout";
import Home from "./Home";
import RegistrationFormSection from "./RegistrationFormSection";
import Header from "./Header";


const Body = () => {
  return (
    // <RouterProvider router={appRouter} />
    <div className="bg-[#000814] flex flex-col min-h-screen w-screen">
      <Header/>
      <RegistrationFormSection/>
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register-form",
    element: <Body />,
  },
  {
    path: "/event",
    element: <Home />,
  },

]);

function mainApp(){
  return <RouterProvider router={appRouter} />
}

export default mainApp;
