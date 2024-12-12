import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Root,
  FormBuilder,
  ErrorPage,
  FormBuilderPreview,
  WorkflowPreview,
  HomePage,
} from "./component";
import "./App.css";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "builder/:id",
        element: <FormBuilder />,
      },
      {
        path: "builder/:id/:token",
        element: <FormBuilder />,
      },
    ],
  },
  {
    path: "/preview/:id",
    element: <FormBuilderPreview />,
  },
  {
    path: "/wpreview/:id",
    element: <WorkflowPreview />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
