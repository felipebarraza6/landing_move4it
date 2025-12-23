import "./assets/css/App.css";
import Home from "./containers/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";

// Move4IA Brand Theme Configuration
const move4iaTheme = {
  token: {
    colorPrimary: "#12E3C2", // Verde-Turquesa para botones primarios
    colorInfo: "#0A8CCF", // Azul Medio para secciones destacadas
    colorSuccess: "#12E3C2",
    colorWarning: "#0A8CCF",
    colorError: "#0A5FE0",
    fontFamily: "'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSizeHeading1: 48,
    fontSizeHeading2: 36,
    fontSizeHeading3: 28,
    fontSizeHeading4: 24,
    fontSizeHeading5: 20,
    borderRadius: 8,
  },
  components: {
    Button: {
      primaryColor: "#FFFFFF",
      fontWeight: 500,
    },
    Typography: {
      titleMarginBottom: "0.5em",
      titleMarginTop: "1.2em",
    },
  },
};

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
    <ConfigProvider theme={move4iaTheme}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ConfigProvider>
  );
}

export default App;
