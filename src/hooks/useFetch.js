import axios from "axios"
import { useState } from "react"
import AllTodos from "../components/AllTodos"

const useFetch = (onget) => {

    const baseUrl = 'https://dbtodos-xs52-dev.fl0.io'

    const [infoApi, setInfoApi] = useState()

    const getApi = (patch) => { 

        const url = `${baseUrl}${patch}`
        axios.get(url)
            .then(res => {
                setInfoApi(res.data)
            } )
            .catch(err => console.log(err))
    }

    const postApi = (patch, data) => { 
        
        const url = `${baseUrl}${patch}`
        axios.post(url, data)
            .then(res => {
                getApi(`/todos/${onget}`)
            })
            .catch(err => console.log(err))
     }

     const deleteApi = (patch, id) => { 
        const url = `${baseUrl}${patch}/${id}`
        axios.delete(url)
            .then(res => {
                const infoApiFiltered = infoApi.filter(e => e.id !== id)
                setInfoApi(infoApiFiltered)
            })
            .catch(err => console.log(err))
      }

    const upDateApi = (patch, data, id) => { 
        
        const url = `${baseUrl}${patch}/${id}`
        axios.put(url, data)
            .then(res => {
                getApi(`/todos/${onget}`)
            })
            .catch(err => console.log(err))
     }

     return [infoApi, getApi, postApi, deleteApi, upDateApi]
  
}

export default useFetch