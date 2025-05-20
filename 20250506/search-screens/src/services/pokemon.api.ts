import api from "./api";

export const requestPokemonData = async (searchTerm: string) => {
  try {
    const res = await api.get("/pokemon/" + searchTerm);
    if (res.status !== 200) throw new Error("something went wrong...");

    return res.data;
  } catch (error) {
    console.error("error =", error);
    return null;
  }
};
