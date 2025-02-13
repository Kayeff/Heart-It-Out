import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Therapy from "./pages/Therapy.jsx";
import Events from "./pages/Events.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import IndividualTherapy from "./pages/IndividualTherapy.jsx";
import CoupleTherapy from "./pages/CoupleTherapy.jsx";
import FamilyTherapy from "./pages/FamilyTherapy.jsx";
import ChildrenTherapy from "./pages/ChildrenTherapy.jsx";
import CorporateTherapy from "./pages/CorporateTherapy.jsx";
import CareerCounsel from "./pages/CareerCounsel.jsx";
import Supervision from "./pages/Supervision.jsx";
import Psychiatrist from "./pages/Psychiatrist.jsx";
import Diagnostics from "./pages/Diagnostics.jsx";
import Academy from "./pages/Academy.jsx";
import Store from "./pages/Store.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App is the layout
    children: [
      { index: true, element: <Home /> }, // Default page
      { path: "about", element: <About /> },
      { path: "therapy", element: <Therapy /> },
      { path: "academy", element: <Academy /> },
      { path: "store", element: <Store /> },
      { path: "events", element: <Events /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
      { path: "individual-therapy", element: <IndividualTherapy /> },
      { path: "couple-therapy", element: <CoupleTherapy /> },
      { path: "family-therapy", element: <FamilyTherapy /> },
      { path: "children-therapy", element: <ChildrenTherapy /> },
      { path: "corporate-therapy", element: <CorporateTherapy /> },
      { path: "career-counsel", element: <CareerCounsel /> },
      { path: "supervision", element: <Supervision /> },
      { path: "psychiatrist", element: <Psychiatrist /> },
      { path: "diagnostics", element: <Diagnostics /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
