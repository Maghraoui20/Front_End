import Axios from "axios";

export const createPfa = async (PfaData) => {
  console.log(PfaData, "PfaData");
  const result = await Axios.post(
    "http://localhost:5000/pfa/createpfa",
    PfaData
  );
  return result.data;
};

export const createTechnologie = async (TechnologieData) => {
  console.log(TechnologieData, "TechnologieData");
  const result = await Axios.post(
    "http://localhost:5000/technologie/createtechnologie",
    TechnologieData
  );
  return result.data;
};

export const updatePfa = async (PfaData, id) => {
  const result = await Axios.put(
    "http://localhost:5000/pfa/updatepfa/" + id,
    PfaData
  );
  return result.data;
};

export const deletePfa = async (id) => {
  const result = await Axios.delete(
    "http://localhost:5000/pfa/deletepfa/" + id
  );
  return result.data;
};
export const getPfabyid = async (id) => {
  const result = await Axios.get("http://localhost:5000/pfa/getpfabyid/" + id);
  return result.data;
};

export const getAllPfa = async () => {
  const result = await Axios.get("http://localhost:5000/pfa/getAllPfa");
  return result.data;
};

export const getAllTechnologies = async () => {
    const result = await Axios.get("http://localhost:5000/technologie/getAllTechnologies");
    return result.data;
  };