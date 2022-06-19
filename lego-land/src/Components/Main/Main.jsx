import React,{useState} from "react";
import styles from "./Main.module.css"
import SideBar from "../SideBar/SideBar"
import MainBody from "../MainBody/MainBody"
   
export default function Main(){
    const [priceFilter,setPriceFilter]=useState();
    const[theme,setTheme]=useState()
    const[age,setage]=useState()
    const [filterApply,setFilterApply]=useState(false)
    const settingThefilter=async (price,theme,age)=>{
       await setPriceFilter(price);
       await setTheme(theme);
       await setage(age)
       
    }
    
  const applyFilter=()=>{
      setFilterApply(prevValue=>!prevValue)
    
  }
    return(
        <>
        <div className={`row ${styles.main}` }>
        <div className="col-lg-3">
           <SideBar settingPrice={settingThefilter} applyFilter={applyFilter}/>
        </div>
         <div className="col-lg-9">
 <MainBody price={priceFilter} theme={theme} age={age} tagvisible={filterApply} applyFilter={applyFilter}/>
         </div>
       
        </div>
      
        </>
    )
}