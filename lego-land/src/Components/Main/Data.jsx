import { useEffect ,useState} from "react"
import React from "react-dom"

function Data(){
    const [Data,setData]=useState()
    const [newArr,setArr]=useState([])
     const dataFetch=()=>{
        fetch("Record/data.json")
        .then(res=>res.json())
        .then(data=>setData(data))
       
     }
     useEffect(
        ()=>{
            dataFetch()
            for (const i in Data){
                setArr(i)
            }
           
        },[]
     )
    
    return(
        <>
        <div>
{ console.log(newArr)}
        </div>
        
        
        </>
    )
}
export default Data