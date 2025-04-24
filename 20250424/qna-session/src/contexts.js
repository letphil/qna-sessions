import { createContext, useContext } from "react";

export const textContext = createContext({ displayedText: "" });

export const useTextContext = () => useContext(textContext);
