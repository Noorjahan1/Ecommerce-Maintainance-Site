import React from "react";
import styles from "./Main.module.css"
import SideBar from "../SideBar/SideBar"
import MainBody from "../MainBody/MainBody"
export default function Main(){
    return(
        <>
        <div className={`row ${styles.main}` }>
        <div className="col-lg-3">
           <SideBar/>
        </div>
         <div className="col-lg-9">
 <MainBody/>
         </div>
       
        </div>
      
        </>
    )
}