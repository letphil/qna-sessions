import useSearchHistoryContext from "../contexts/search-history/use-search-history-context";
import { useNavigate } from "react-router";

export default function HistoryScreen() {
  const navigate = useNavigate();
  const { searchTerms, setSearchTerms } = useSearchHistoryContext();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        goback
      </button>
      {searchTerms.map((searchTerm: string, idx: number) => {
        return (
          <button
            key={`search-term-button-${idx}`}
            onClick={() => {
              const clone = [...searchTerms];
              clone.splice(idx, 1);
              setSearchTerms(clone);
            }}
          >
            {searchTerm}
          </button>
        );
      })}
    </div>
  );
}
