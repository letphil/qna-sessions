import { ChangeEventHandler, useEffect, useState } from "react";

// use-debounce.ts ------
function useDebounce(value: string, delay?: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 300);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// ------------------------------------

// text-input.tsx

interface ITextInput {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function TextInput({ value, onChange }: ITextInput) {
  return <input value={value} onChange={onChange} />;
}

// ----------

const SEARCH_TERMS = [
  "FAST AND FURIOUS",
  "RUSH HOUR",
  "GONE IN 60 SECONDS",
  "PULP FICTION",
  "FIGHT CLUB",
  "300",
  "MEMENTO",
];

export default function App() {
  // state variables
  const [inputText, setInputText] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);
  const debouncedInputText = useDebounce(inputText, 300);

  useEffect(() => {
    console.log("API CALL");
    if (debouncedInputText === "") return setResults([]);
    const re = new RegExp(debouncedInputText, "gi");
    setResults(SEARCH_TERMS.filter((movie) => re.test(movie)));
    // console.log("DEBOUNCED =", debouncedInputText);
  }, [debouncedInputText]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputText(e.target.value);

  return (
    <div>
      <TextInput value={inputText} onChange={handleInputChange} />
      {!!results.length && JSON.stringify(results)}
    </div>
  );
}
