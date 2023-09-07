import axios from "axios"
import { useState } from "react"

const useFetch = () => {

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
                setInfoApi([...infoApi, res.data])
            })
            .catch(err => console.log(err))
     }

     const deleteApi = (patch, id) => { 
        const url = `${baseUrl}${patch}/${id}`
        axios.delete(url)
            .then(res => {})
            .catch(err => console.log(err))
      }

    const upDateApi = (patch, data, id) => { 
        
        const url = `${baseUrl}${patch}/${id}`
        axios.put(url, data)
            .then(res => {})
            .catch(err => console.log(err))
     }

     return [infoApi, getApi, postApi, deleteApi, upDateApi]
  
}

export default useFetch