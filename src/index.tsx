import ReactDOM from "react-dom/client";
import App from "./App.js";
import { AppContextProvider } from "./contexts/AppContext.js";
import "./main.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
