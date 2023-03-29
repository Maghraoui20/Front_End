import Axios from "axios"

export const createEnseignant = async (EnseignantData) => {
  const result = await Axios.post("http://localhost:5000/enseignants/create", EnseignantData)
  return result.data
}
export const updateEnseignant = async (EnseignantData, id) => {
  const result = await Axios.put("http://localhost:5000/enseignants/updatebyid/"+id, EnseignantData)
  return result.data
}

export const deleteEnseignant = async (id) => {
  const result = await Axios.delete("http://localhost:5000/enseignants/deletebyid/"+id)
  return result.data
}
export const getEnseignantbyid = async (id) => {
  const result = await Axios.get("http://localhost:5000/enseignants/getbyid/"+id)
  return result.data
}
export const getAllEnseignant = async () => {
  const result = await Axios.get("http://localhost:5000/enseignants/getAll")
  return result.data
}