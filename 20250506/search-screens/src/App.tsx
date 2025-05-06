import AppRouter from "./router";
import SearchHistoryContextProvider from "./contexts/search-history/search-history-context-provider";

export default function App() {
  return (
    <SearchHistoryContextProvider>
      <AppRouter />
    </SearchHistoryContextProvider>
  );
}
