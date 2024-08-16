import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Api } from './Api'



function App() {
  const notify = {
    delete: () => toast('Removido')
  }

  const [devmons, setDevmons] = useState([])



  useEffect(() => {
    const fetchData = async () => {
      const data = await Api.getDataApi()
      setDevmons(data)
    }
    fetchData()
  }, [])

  const deleteComponent = (id) => {
    const data = devmons.filter((devmon) => devmon._id !== id)
    setDevmons(data)
    notify.delete('oi')
  }

  return (
    <>
      <div className='container'>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        {devmons.map((devmon, index) => (

          <Card key={devmon._id} item={devmon} index={index} deleteComponent={deleteComponent} />
        ))}

      </div>
    </>
  )

}

export default App
