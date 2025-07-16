import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Characters from "./pages/Characters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/About",
        element: <About/>
      },
      {
        path: "/Characters",
        element: <Characters/>,
      }
    ],
  },
]);
export default router;
