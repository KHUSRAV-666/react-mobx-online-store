import { RouterProvider } from "react-router-dom";
import { observer } from "mobx-react-lite";
import router from "./routes";

const App = observer(() => {

  return <RouterProvider router={router} />;
});

export default App;
