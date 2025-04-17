import { useState } from "react";

const API = "https://randomuser.me/api";

export default function App() {
  const [randomUsers, setRandomUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRandomUsers = async (results) => {
    setLoading(true);
    try {
      const req = await fetch(`${API}?results=${results || 10}`);
      const toJson = await req.json();
      return toJson;
    } catch (error) {
      console.error("error =", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h1>LOADING RANDOM USERS</h1>;

  return (
    <div>
      <button
        onClick={async () => {
          const gotUsers = await getRandomUsers();
          console.log("gotUsers =", gotUsers);
          setRandomUsers(gotUsers.results);
        }}
      >
        make request
      </button>
      {/* <pre>{JSON.stringify(randomUsers, null, 2)}</pre> */}
      {randomUsers.length === 0 ? (
        <h1>NO USERS YET</h1>
      ) : (
        // JSON.stringify(randomUsers, null, 2)
        randomUsers.map((randomUser, idx) => {
          if (randomUser.name.first === "Joona") return;
          return (
            <div
              style={{
                borderWidth: 1,
                borderColor: "hotpink",
                borderStyle: "solid",
                margin: 5,
                padding: 5,
              }}
            >
              <p>{`${randomUser.name.title} ${randomUser.name.first} ${randomUser.name.last}`}</p>
              <img src={randomUser.picture.medium} alt="USER" />
              <p>
                {Object.keys(randomUser).map((k, idx) =>
                  idx === Object.keys(randomUser).length - 1 ? k : `${k} | `
                )}
              </p>
            </div>
          );
        })
      )}
    </div>
  );
}
