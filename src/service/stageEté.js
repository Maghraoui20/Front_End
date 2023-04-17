import Axios from "axios";

export const createStageEté = async (StageEtéData) => {
  console.log(StageEtéData, "StageEtéData");
  const result = await Axios.post(
    "http://localhost:5000/stage/create",
    StageEtéData
  );

  return result.data;
};