import { useState } from "react";
import { useNavigate } from "react-router";

import useSearchHistoryContext from "../contexts/search-history/use-search-history-context";
import { requestPokemonData } from "../services/pokemon.api";
import type { Pokemon } from "../types";
// import { useDebounce } from "../hooks";

export default function SearchScreen() {
  const [currentSearchTerm, setCurrentSearchTerm] = useState<string>("");
  const [result, setResult] = useState<null | Pokemon>(null);

  // const [filteredTerms, setFilteredTerms] = useState<string[]>([]);
  const { searchTerms, setSearchTerms } = useSearchHistoryContext();
  const navigate = useNavigate();

  // const debouncedCurrentSearchTerm = useDebounce<string>(currentSearchTerm);

  const recentSeachTerms = () => {
    const clone = [...searchTerms];
    clone.reverse();
    return clone.slice(0, 5);
  };

  const navigateToSearchHistory = () => {
    navigate("/history");
  };

  const handleSearch = async (search: string) => {
    try {
      const attempt = await requestPokemonData(search);
      console.log("attempt =", attempt);
      setResult(attempt);

      console.log("NAVIGATION SHOULD HAPPEN HERE");
      // navigate("/results", { state: { pokemon: attempt } });
      // setTimeout(() => {
      // }, 500);
    } catch (error) {
      console.error("error =", error);
      return null;
    }
  };

  const handleKeyUpOnSearchbar = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.target.value === "") setResult(null);

    if (e.key === "Enter") {
      const clone = [...searchTerms];

      const searchedIndex = searchTerms.findIndex(
        (search: string) => search === currentSearchTerm
      );
      // remove old index if exists
      if (searchedIndex !== -1) clone.splice(searchedIndex, 1);

      setSearchTerms([...clone, currentSearchTerm]);

      localStorage.setItem(
        "searches",
        JSON.stringify([...clone, currentSearchTerm])
      );

      await handleSearch(currentSearchTerm);
    }
  };

  return (
    <div className="flex flex-wrap h-screen justify-center mt-5">
      {/* <button
        onClick={() => {
          navigate("/results", { state: { testData: 1 } });
        }}
      >
        go to results
      </button> */}
      <div className="w-full px-7">
        <h1 className="text-center text-3xl">Title here</h1>
        <input
          type="text"
          placeholder="Type here"
          className="input w-full mt-4"
          value={currentSearchTerm}
          onChange={(e) => setCurrentSearchTerm(e.target.value)}
          onKeyUp={handleKeyUpOnSearchbar}
        />
        <p
          className="text-right text-blue-600"
          onClick={navigateToSearchHistory}
        >
          show history
        </p>
        {result ? (
          <>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </>
        ) : (
          (currentSearchTerm === ""
            ? recentSeachTerms()
            : searchTerms.filter(
                (searchTerm: string) =>
                  searchTerm.indexOf(currentSearchTerm) !== -1
              )
          ).map((searchTerm: string, index: number) => (
            <div
              key={`recent-searches-${index}`}
              onClick={() => {
                setCurrentSearchTerm(searchTerm);
              }}
            >
              <p>{searchTerm}</p>
            </div>
          ))
        )}
      </div>
      {/* when currentSearchTerm is empty string show recent searchTerms */}

      {/* else : search terms that are relevent */}
    </div>
  );
}
