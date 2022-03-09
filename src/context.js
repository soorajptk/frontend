import axios from 'axios'
import React,{createContext, useContext, useEffect, useState} from 'react'

const AppContext=createContext()

export const AppProvider=({children})=>{
const [user,setUser]=useState(null) 
const [isLoading,setLoading]=useState(true)
const [success,setSuccess]=useState('')
const [isError,setError]=useState('')
const [Rgstrsuccess,setRgstrsuccess]=useState('')
const [loadStudents,setLoadStudents]=useState([])
const [PendingStudent,setPendingStudent]=useState([])
const [LoadEmployee,setLoadEmployee]=useState([])
const [PendingEmployee,setPendingEmployee]=useState([])
const [SearchStudent,setSearchStudent]=useState([])


const removeUser=async()=>{
    try {
    const {data}=await axios.post('http://localhost:5000/api/auth/logout',{userId:user.userId,role:user.role},{withCredentials:true})
        console.log(data)
    setUser(null)
    
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
const checkUser=async()=>{
    try{
        const {data}=await axios.get('http://localhost:5000/api/auth/showme',{withCredentials:true})
        setUser(data.user)
        console.log(data.user)
    setLoading(false)
    }catch(err){
        console.log(err.response)
    setLoading(false)

    }

}
    checkUser()
},[])
    
useEffect(()=>{
  let errmsg=setTimeout(() => {
    setSuccess('')
    setError('')
  },5000);
return ()=> clearTimeout(errmsg)
},[isError,success])

console.log(isError,success)

    return <AppContext.Provider value={{SearchStudent,setSearchStudent,PendingEmployee,setPendingEmployee,LoadEmployee,setLoadEmployee,PendingStudent,setPendingStudent,loadStudents,setLoadStudents,isError,setError,setLoading,success,setSuccess,isLoading,user,removeUser,setUser,setRgstrsuccess,Rgstrsuccess}} >{children}</AppContext.Provider>
}


export const useGlobalContext=()=>{
   return useContext(AppContext)
}