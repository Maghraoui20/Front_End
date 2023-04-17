import Axios from "axios";

export const createStagePfe = async (StagePfeData) => {
  console.log(createStagePfe, "StageEtéData");
  const result = await Axios.post(
    "http://localhost:5000/pfe/createPfe",
    StagePfeData
  );

  return result.data;
};