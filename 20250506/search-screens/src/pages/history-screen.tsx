import { useNavigate } from "react-router";

import useSearchHistoryContext from "../contexts/search-history/use-search-history-context";
import { CancelSvg, BackSvg } from "../assets/svgs";

export default function HistoryScreen() {
  const navigate = useNavigate();
  const { searchTerms, setSearchTerms } = useSearchHistoryContext();

  const removeSearchTerm = (searchTerm: string, searchIdx: number) => {
    console.log("searchIdx =", searchIdx);
    console.log("searchTerms =", searchTerms);
    console.log("removeSearchTerm", searchTerm);
    // get from local storage
    const searches = localStorage.getItem("searches");
    if (!searches) return;
    const searchesJson = JSON.parse(searches);
    searchesJson.splice(searchIdx, 1);
    localStorage.setItem("searches", JSON.stringify(searchesJson));
    setSearchTerms(searchesJson);

    // setSearchTerms((prev) => prev.filter((name) => name !== searchTerm));
  };

  const HistorySearchItem = ({
    searchTerm,
    searchIdx,
  }: {
    searchTerm: string;
    searchIdx: number;
  }) => {
    return (
      <li className="opacity-50">
        <button
          className="btn"
          onClick={() => removeSearchTerm(searchTerm, searchIdx)}
        >
          <CancelSvg className="size-4 me-2 inline-block text-base-content/50" />
        </button>
        <span className="">{searchTerm}</span>
      </li>
    );
  };

  return (
    <div className="flex h-screen border-2 border-white justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          <span
            className="badge badge-xs badge-error"
            onClick={() => {
              navigate(-1);
            }}
          >
            <BackSvg />
          </span>
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">Recent Searches</h2>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {[...searchTerms].reverse().map((searchTerm, idx: number) => {
              return (
                <HistorySearchItem
                  key={`search-history-term-${searchTerms.length - idx}`}
                  searchTerm={searchTerm}
                  searchIdx={searchTerms.length - 1 - idx}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

{
  /* <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>High-resolution image generation</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Customizable style templates</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Batch processing capabilities</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>AI-driven image enhancements</span>
            </li>
            <li className="opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-base-content/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="line-through">Seamless cloud integration</span>
            </li>
            <li className="opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-base-content/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="line-through">
                Real-time collaboration tools
              </span>
            </li> */
}

{
  /* <div>
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
</div> */
}
