import { createBrowserRouter, RouterProvider } from "react-router";
import { SearchScreen, HistoryScreen } from "../pages";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SearchScreen />,
    },
    {
      path: "/history",
      element: <HistoryScreen />,
    },
  ]);

  return <RouterProvider router={router} />;
}
