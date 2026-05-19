import api from "./axios"

export const bookConselling = async (data)=>{
    try{
        const res = await api.post("/book-counselling", data);
    
        return res.data;
    }catch(err){
        console.error(err)
        throw new Error(err.response.data.message)
    }
    
}