import Axios from "axios"
export const header = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})
export const signin = async (signinData) => {
  console.log(signinData,"signinData");
  const result = await Axios.post("http://localhost:5000/users/signin", signinData)
  console.log(result,"result");
  return result.data
}
