import Axios from "axios"

export const updateEtudiant = async (EtudiantData, id) => {
  const result = await Axios.put("http://localhost:5000/etudiants/updatebyid/"+id, EtudiantData)
  return result.data
}

export const getEtudiantbyid = async (id) => {
  const result = await Axios.get("http://localhost:5000/etudiants/getbyid/"+id)
  return result.data
}
