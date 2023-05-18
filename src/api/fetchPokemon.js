import axios from "axios";

export const fetchPokemon = async (pokemon, limit = 0, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}?limit=${limit}&offset=${offset}`;
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
