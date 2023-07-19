import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root, FormBuilder, ErrorPage, FormBuilderPreview } from "./component";
import "./App.css";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "builder/:id/:token",
        element: <FormBuilder />,
      },
      {
        path: "preview/:id",
        element: <FormBuilderPreview />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
