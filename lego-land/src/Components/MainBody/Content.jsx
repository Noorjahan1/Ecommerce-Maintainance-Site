import React from "react";
import styles from "./MainBody.module.css"
import { useState } from "react";


export default function Content(props){
    const [like,setLike]=useState(false)
     const toggleLike= async (event)=>{
          await setLike(prev=>!prev)
           event.target.style.color=like?"red":"#5c5f6f"
        
     }
    const [a, b,c]=props.image
    const column=props.data.map(e=>{
            if(props.data.length<3){
                 return(
                <div className={props.data.length===1||props.data.length===2?"col-lg-6":"col"}>
                   <div className={`card ${styles.carItem}`}>
                       <div className={`${styles.image} p-5`}>
                           <img src={a} alt="card" />
                       </div>
                       <div className={`${styles.like}`}>
                           <i  onClick={toggleLike} className={`fa-solid fa-heart`} ></i>
                       </div>
                       <div className={styles.carText}>
                           <h3 className={styles.vendorCode}>Vendor Code :{e["Vendor Code"]}</h3>
                           <h3 className={styles.productName}>{e.title}<br/>{e.collection} {`<<Brutal>>`} </h3>
                            <p className={styles.price}>Price</p>
                            <h3 className={styles.dollar}>{e.presentPrice} $<span className={styles.strike}>{e.strikePrice}$</span></h3>
                       </div>
                       <div className={styles.addToCart}>
                           <i  className="fa-solid fa-cart-shopping"></i>
                       </div>
                   </div>
               </div>
            )
            }
            return(
                <div className="col-lg-4">
                   <div className={`card ${styles.carItem}`}>
                       <div className={`${styles.image} p-5`}>
                           <img src={a} alt="card" />
                       </div>
                       <div className={`${styles.like}`}>
                           <i  onClick={toggleLike} className={`fa-solid fa-heart`} ></i>
                       </div>
                       <div className={styles.carText}>
                           <h3 className={styles.vendorCode}>Vendor Code :{e["Vendor Code"]}</h3>
                           <h3 className={styles.productName}>{e.title}<br/>{e.collection} {`<<Brutal>>`} </h3>
                            <p className={styles.price}>Price</p>
                            <h3 className={styles.dollar}>{e.presentPrice} $<span className={styles.strike}>{e.strikePrice}$</span></h3>
                       </div>
                       <div className={styles.addToCart}>
                           <i  className="fa-solid fa-cart-shopping"></i>
                       </div>
                   </div>
               </div>
            )
        }
    )
    
    
  
    return(
    <>
    <div className={`row ${styles.cards} pb-5`}>
              
             {
                 column.map(el=>el)
             }
           

           </div>
    </>)
}