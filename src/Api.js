import { toast } from "react-toastify"

const apiUrl = 'https://backend-integrar-com-o-frontend.onrender.com/personagem'

export const Api = {
getDataApi : async () =>{
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data
},

deleteDataApi : async (id)=>{
   await fetch(apiUrl+'/'+id, {
        method: 'DELETE'
    }).then(()=>{
        toast('Item removido!')
    }).catch((err) =>{
        toast('erro ao remover ' + err)
    })
}
} 
