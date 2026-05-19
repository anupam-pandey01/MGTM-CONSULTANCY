import api from "./axios"

export const saveContact = async (data)=>{
    try{
       const res = await api.post("/contact", data);

       return res.data
    }catch(err){
        console.error(err.response.data)
        throw new Error(err.response.data.message);
    }
}