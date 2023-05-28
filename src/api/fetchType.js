import axios from "axios";

export const fetchType = async (type) => {
  try {
    let url = `https://pokeapi.co/api/v2/type/${type.toLowerCase()}`;
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
