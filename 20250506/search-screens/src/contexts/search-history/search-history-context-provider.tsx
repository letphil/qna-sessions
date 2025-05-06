import { useState } from "react";

import { SearchHistoryContext } from "./use-search-history-context";

export default function SearchHistoryContextProvider({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const [searchTerms, setSearchTerms] = useState<string[]>([]);
  return (
    <SearchHistoryContext.Provider
      value={{
        searchTerms,
        setSearchTerms,
      }}
    >
      {children}
    </SearchHistoryContext.Provider>
  );
}
