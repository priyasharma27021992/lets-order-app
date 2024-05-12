import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { UserContext } from "./contexts/UserContext";

const AppLayout = () => {
  return (
    <div className="app">
      <UserContext.Provider value={{ loggedInUser: "Priya" }}>
        <Header />
        <Outlet />
        {/* outlet is filled with respect to the path */}
      </UserContext.Provider>
    </div>
  );
};

// creating the configs for routing: what will happen on a particular path/url
const appRouter = createBrowserRouter([
  {
    path: "/", //root route
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={appRouter}>
    <AppLayout />
  </RouterProvider>
);
