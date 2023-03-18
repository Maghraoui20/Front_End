import Axios from "axios"
export const header = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})
export const signin = async (signinData) => {
  const result = await Axios.post("http://localhost:5000/users/signin", signinData)
  return result.data
}
