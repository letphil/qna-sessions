import { useEffect, useState, createContext, useContext } from "react";
import { useTextContext, textContext } from "./contexts";

export default function App() {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [displayedText, setDisplayedText] = useState("LOGIN PLEASE");

  const checkLocalStorage = () => {
    const loggedInState = localStorage.getItem("LOGGED_IN_STATE");
    console.log("loggedInState =", loggedInState);
    if (loggedInState === "LOGGED_IN")
      return setIsLoggedIn(true), setDisplayedText("YOU ARE LOGGED IN");

    return () => {
      // cleanup
    };
  };

  useEffect(checkLocalStorage, []);

  const TextProvider = (props) => {
    return (
      <textContext.Provider
        value={{
          displayedText: displayedText,
        }}
      >
        {props.children}
      </textContext.Provider>
    );
  };

  const handleLoggedInState = () => {
    if (loggedIn) {
      setIsLoggedIn(false);
      setDisplayedText("LOGIN PLEASE");
      localStorage.setItem("LOGGED_IN_STATE", "LOGGED_OUT");
    } else {
      setIsLoggedIn(true);
      setDisplayedText("YOU ARE LOGGED IN");
      localStorage.setItem("LOGGED_IN_STATE", "LOGGED_IN");
    }
  };

  return (
    <TextProvider>
      <div>
        <DisplayedText text={displayedText} />
        <button onClick={handleLoggedInState}>
          {loggedIn ? "LOGOUT" : "LOGIN"}
        </button>
      </div>
    </TextProvider>
  );
}

const DisplayedText = () => {
  const { displayedText } = useTextContext();

  console.log("displayedText =", displayedText);

  return <h1>{displayedText}</h1>;
};
