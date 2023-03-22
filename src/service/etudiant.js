import Axios from "axios"

export const createEtudiant = async (EtudiantData) => {
  const result = await Axios.post("http://localhost:5000/etudiants/create", EtudiantData)
  return result.data
}
export const updateEtudiant = async (EtudiantData, id) => {
  const result = await Axios.put("http://localhost:5000/etudiants/updatebyid/"+id, EtudiantData)
  return result.data
}

export const deleteEtudiant = async (id) => {
  const result = await Axios.delete("http://localhost:5000/etudiants/deletebyid/"+id)
  return result.data
}
export const getEtudiantbyid = async (id) => {
  const result = await Axios.get("http://localhost:5000/etudiants/getbyid/"+id)
  return result.data
}
export const getAllEtudiant = async () => {
  const result = await Axios.get("http://localhost:5000/etudiants/getAll")
  return result.data
}