import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";

interface ISearchHistoryContext {
  searchTerms: string[];
  setSearchTerms: Dispatch<SetStateAction<string[]>>;
}

export const SearchHistoryContext = createContext<ISearchHistoryContext>({
  searchTerms: [] as string[],
  setSearchTerms: () => {},
});

export default function useSearchHistoryContext() {
  return useContext(SearchHistoryContext);
}
