import Axios from "axios";

export const createStage = async (StageData) => {
    console.log(StageData, "StageData");
    const result = await Axios.post(
      "http://localhost:5000/stage/create",
      StageData
    );
    return result.data;
  };