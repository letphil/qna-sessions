import { useState, Fragment, PropTypes, useEffect } from "react";

import "./App.css";

const RETRIEVE_POKEMON_EP = "https://pokeapi.co/api/v2/pokemon?limit=100000";

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  // const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filterKey, setFilterKey] = useState("");

  useEffect(() => {
    const retrieve = async () => {
      const res = await fetch(
        "https://www.coinbase.com/api/v2/assets/prices/bitcoin"
      );
      const toJson = await res.json();

      console.log(toJson);
    };
    retrieve();
  }, []);

  const retrivePokemon = async () => {
    setLoading(true);
    try {
      console.log(RETRIEVE_POKEMON_EP);
      const req = await fetch(RETRIEVE_POKEMON_EP);
      const toJSON = await req.json();

      console.log("toJSON =", toJSON.results);
      setPokemon(toJSON.results);
    } catch (error) {
      console.error("error =", error);
    } finally {
      setLoading(false);
    }
  };

  // if(loading) {
  //   return "LOADING..."
  // }

  return (
    <Fragment>
      <div className="card">
        <button onClick={retrivePokemon}>retrieve pokemon</button>
        <input
          value={filterKey}
          onChange={(e) => setFilterKey(e.target.value)}
        />

        {loading === true ? (
          "LOADING"
        ) : pokemon.length === 0 ? (
          "PRESS BUTTON"
        ) : (
          <div>
            {pokemon
              .filter((p) => p.name.includes(filterKey))
              .map((pocketMonster, idx) => (
                <>
                  <PokemonComponents.Card
                    key={idx}
                    // {...pocketMonster} // { name: string, url: string }
                    data={{
                      ...pocketMonster,
                    }}

                    // pokemon={pocketMonster.name}
                    // url={pocketMonster.url}
                  />
                </>
              ))}
          </div>
        )}
      </div>
    </Fragment>
  );
}

const PokemonCard = (props) => {
  const HighlightText = props.data.name === "bulbasaur" ? "h1" : "p";

  console.log(HighlightText);

  return (
    <div className="card">
      <HighlightText>{props.data.name}</HighlightText>
      <button
        onClick={() => {
          console.log(props.data.url);
        }}
      >
        details
      </button>
    </div>
  );
};

const PokemonComponents = {
  Card: PokemonCard,
  Header: () => (
    <header>
      <h1>header</h1>
    </header>
  ),
};

// PokemonCard.propTypes = {
//   name: PropTypes.string,
//   url: PropTypes.string,
// };
