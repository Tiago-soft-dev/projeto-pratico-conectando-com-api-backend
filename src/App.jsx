import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { toast, ToastContainer } from 'react-toastify'
import { Api } from './Api'



function App() {
  const notify = () => {
    toast('testando toastify')
  }

  const [devmons, setDevmons] = useState([])
  // console.log(15,devmons);
  // const dados = Api.getDataApi()
  // setDevmons(dados)


  // const apiUrl = 'https://backend-integrar-com-o-frontend.onrender.com/personagem'


  // async function getDataApi() {

  //   const response = await fetch(apiUrl)
  //   const data = await response.json()
  //   setDevmons(data)
  // }


  useEffect(() => { 
    const fetchData = async ()=>{
      const data = await Api.getDataApi()
      setDevmons(data)
    }
    fetchData()
   }, [])

  const deleteComponent = (id) => {
    const data = devmons.filter((devmon)=>devmon._id !== id)
    setDevmons(data)
  }

  return (
    <>
      <div className='container'>
        <ToastContainer />
        {devmons.map((devmon, index) => (
          
            <Card key={devmon._id} item={devmon} index={index} deleteComponent={deleteComponent}/>
        ))}

      </div>
    </>
  )

}

export default App
