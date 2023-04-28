import Axios from "axios";

export const createSaison = async (saison) => {
  console.log(saison, "saison");
  const result = await Axios.post(
    "http://localhost:5000/saison/createSaison",
    saison
  );

  return result.data;
};