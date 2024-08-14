import {useState, useEffect} from 'react'
import './App.css'
import Card from './components/Card/Card'



function App() {

const [devmons, setDevmons] = useState([])


  const apiUrl = 'https://backend-integrar-com-o-frontend.onrender.com/personagem'


  async function getDataApi() {

    
    const response = await fetch(apiUrl)
    const data = await response.json()
   
    devmons.push(...data)
    
  }
 getDataApi()
 

  return (
   <>
    <div className='container'>
      
      {devmons.map((devmon)=>{
        return <Card key={devmon._id} item={devmon}/>
      })}
    </div>
   </>
  )
}

export default App
