import { useLocation, useNavigate } from "react-router";

import useSearchHistoryContext from "../contexts/search-history/use-search-history-context";
import { CancelSvg, BackSvg } from "../assets/svgs";

export default function ResultsScreen() {
  const navigate = useNavigate();

  const location = useLocation();
  const myProp = location.state;

  console.log("myProp =", myProp);

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
        </div>
      </div>
    </div>
  );
}
