import Axios from "axios"

export const updateEtudiant = async (EtudiantData, id) => {
  const result = await Axios.put("http://localhost:5000/users/updatebyid/"+id, EtudiantData)
  return result.data
}

export const getEtudiantbyid = async (id) => {
  const result = await Axios.get("http://localhost:5000/users/getbyid/"+id)
  return result.data
}
