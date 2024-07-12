import axios from 'axios'

export const  Signupapi=async(data)=>{
    try{
      return await axios.post("http://localhost:5000/signup",data);

    }catch(error){
console.log("Error while calling signup api",error)

    }

}

export const  Loginapi=async(data)=>{
  try{
    return await axios.post("http://localhost:5000/login",data);

  }catch(error){
console.log("Error while calling signup api",error)
return error.response;

  }

}