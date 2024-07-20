import "./assets/css/App.css";
import Home from "./containers/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/what",
        },
        {
          path: "/who",
        },
        {
          path: "/services",
        },
        {
          path: "/problems",
        },
        {
          path: "/faq",
        },
        {
          path: "/contact",
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
