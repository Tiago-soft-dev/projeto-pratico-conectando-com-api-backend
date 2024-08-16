const apiUrl = 'https://backend-integrar-com-o-frontend.onrender.com/personagem'

export const Api = {
getDataApi : async () =>{
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data
}
}