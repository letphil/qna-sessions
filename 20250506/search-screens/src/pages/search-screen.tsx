import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import useSearchHistoryContext from "../contexts/search-history/use-search-history-context";

export default function SearchScreen() {
  const [currentSearchTerm, setCurrentSearchTerm] = useState<string>("");
  const { searchTerms, setSearchTerms } = useSearchHistoryContext();
  const navigate = useNavigate();

  useEffect(() => {
    let searches: string[] | string | null = localStorage.getItem("searches");
    if (searches) searches = JSON.parse(searches as string) as string[];
    console.log(searches, typeof searches);

    if (Array.isArray(searches)) {
      console.log("IN HERE");
      setSearchTerms(searches);
    } else {
      setSearchTerms([]);
    }
  }, []);

  const recentSeachTerms = () => {
    const clone = [...searchTerms];
    clone.reverse();
    return clone.slice(0, 5);
  };

  const navigateToSearchHistory = () => {
    navigate("/history");
  };

  return (
    <div className="flex flex-wrap h-screen justify-center mt-5">
      <div>
        <h1 className="text-center text-3xl">Title here</h1>
        <input
          type="text"
          placeholder="Type here"
          className="input w-100 mt-4"
          value={currentSearchTerm}
          onChange={(e) => setCurrentSearchTerm(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              setSearchTerms([...searchTerms, currentSearchTerm]);

              localStorage.setItem(
                "searches",
                JSON.stringify([...searchTerms, currentSearchTerm])
              );
              setCurrentSearchTerm("");
            }
          }}
        />
        <p
          className="text-right text-blue-600"
          onClick={navigateToSearchHistory}
        >
          show history
        </p>
        {(currentSearchTerm === ""
          ? recentSeachTerms()
          : searchTerms.filter(
              (searchTerm: string) =>
                searchTerm.indexOf(currentSearchTerm) !== -1
            )
        ).map((searchTerm: string, index: number) => (
          <div key={`recent-searches-${index}`}>
            <p>{searchTerm}</p>
          </div>
        ))}
      </div>
      {/* when currentSearchTerm is empty string show recent searchTerms */}

      {/* else : search terms that are relevent */}
    </div>
  );
}
