import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Specialties } from "./pages/Specialties";
import { Cases } from "./pages/Cases";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "especialidades", Component: Specialties },
      { path: "processos", Component: Cases },
      { path: "contato", Component: Contact },
    ],
  },
]);
