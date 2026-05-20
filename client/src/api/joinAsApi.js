import api from "./axios"

export const joinAs = async (data)=>{
    try{
        const res = await api.post("/join-as", data);
    
        return res.data;
    }catch(err){
        console.error(err)
        throw new Error(err.response.data.message)
    }
    
}