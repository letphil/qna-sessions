import { createBrowserRouter, RouterProvider } from "react-router";
import { SearchScreen, HistoryScreen } from "../pages";
import { useEffect } from "react";
import useSearchHistoryContext from "../contexts/search-history/use-search-history-context";
import ResultsScreen from "../pages/results-screen";

export default function AppRouter() {
  const { setSearchTerms } = useSearchHistoryContext();

  useEffect(() => {
    let searches: string[] | string | null = localStorage.getItem("searches");
    if (searches) searches = JSON.parse(searches as string) as string[];
    console.log(searches, typeof searches);

    if (Array.isArray(searches)) {
      setSearchTerms(searches);
    } else {
      setSearchTerms([]);
    }
  }, [setSearchTerms]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SearchScreen />,
    },
    {
      path: "/results",
      element: <ResultsScreen />,
    },
    {
      path: "/history",
      element: <HistoryScreen />,
    },
  ]);

  return <RouterProvider router={router} />;
}
