import React from "react";
import styles from "./MainBody.module.css"
import card1 from "../../images/cardIem1.jpg"
import card2 from "../../images/cardIem2.jpg"
import card3 from "../../images/cardIem3.jpg"
import card4 from "../../images/cardIem4.jpg"
import card5 from "../../images/cardIem5.jpg"
import card6 from "../../images/cardIem6.jpg"
import Pagination from "../Pagination/Pagination"
export default function MainBody(){
    return(
        <>
        <div className={styles.main}>
           <div className={styles.mainText}>
               <h1>
                   Catalog
               </h1>
           </div>
           <div className={styles.formData}>
                 <div className={styles.filter}>
                     <div className={`${styles.searchIcon}`}>
                       <i className="fa-solid fa-magnifying-glass"></i>
                     </div>
                   
                   <input type="text" placeholder="Search among 100+ products" />
                 </div>
                 <div className={styles.popularText}>
                     <div className={`${styles.popular}`}>
                      <i className={`fa-solid fa-wifi ${styles.optionIcon}`}></i>
                     </div>
                     <select className={styles.options} id="Popular">
                         <option value="popular">Popular</option>
                     </select>
                 </div>
           </div>
           <div className={styles.tag}>
               <div className={styles.tagItem}>
                   <h3>Transport</h3>
                   <i className="fa-solid fa-xmark"></i>
               </div>
               <div className={styles.tagItem}>
                   <h3>Older than 12 years</h3>
                   <i className="fa-solid fa-xmark"></i>
               </div>
           </div>
           <div className={`row ${styles.cards} pb-5`}>
               <div className="col-lg-4">
                   <div className={`card ${styles.carItem}`}>
                       <div className={`${styles.image} p-5`}>
                           <img src={card1} alt="card" />
                       </div>
                       <div className={`${styles.like}`}>
                           <i className={`fa-solid fa-heart`}></i>
                       </div>
                       <div className={styles.carText}>
                           <h3 className={styles.vendorCode}>Vendor Code :10521</h3>
                           <h3 className={styles.productName}>Big blue lego jeep<br/>Collection {`<<Brutal>>`} </h3>
                            <p className={styles.price}>Price</p>
                            <h3 className={styles.dollar}>400 $<span className={styles.strike}>600$</span></h3>
                       </div>
                       <div className={styles.addToCart}>
                           <i className="fa-solid fa-cart-shopping"></i>
                       </div>
                   </div>
               </div>
               <div className="col-lg-4">
                      <div className={`card ${styles.carItem}`}>
                       <div className={`${styles.image} p-5`}>
                           <img src={card2} alt="card" />
                       </div>
                       <div className={`${styles.like}`}>
                           <i className={`fa-solid fa-heart`}></i>
                       </div>
                       <div className={styles.carText}>
                           <h3 className={styles.vendorCode}>Vendor Code :10521</h3>
                           <h3 className={styles.productName}>Big blue lego jeep<br/>Collection {`<<Brutal>>`} </h3>
                            <p className={styles.price}>Price</p>
                            <h3 className={styles.dollar}>400 $<span className={styles.strike}>600$</span></h3>
                       </div>
                       <div className={styles.addToCart}>
                           <i className="fa-solid fa-cart-shopping"></i>
                       </div>
                   </div>
               </div>
               <div className="col-lg-4">
                      <div className={`card ${styles.carItem}`}>
                       <div className={`${styles.image} p-5`}>
                           <img src={card3} alt="card" />
                       </div>
                       <div className={`${styles.like}`}>
                           <i className={`fa-solid fa-heart`}></i>
                       </div>
                       <div className={styles.carText}>
                           <h3 className={styles.vendorCode}>Vendor Code :10521</h3>
                           <h3 className={styles.productName}>Big blue lego jeep<br/>Collection {`<<Brutal>>`} </h3>
                            <p className={styles.price}>Price</p>
                            <h3 className={styles.dollar}>400 $<span className={styles.strike}>600$</span></h3>
                       </div>
                       <div className={styles.addToCart}>
                           <i className="fa-solid fa-cart-shopping"></i>
                       </div>
                   </div>
               </div>

           </div>
           <div className={`row ${styles.cards} pb-5`}>
               <div className="col-lg-4">
                   <div className={`card ${styles.carItem}`}>
                       <div className={`${styles.image} p-5`}>
                           <img src={card4} alt="card" />
                       </div>
                       <div className={`${styles.like}`}>
                           <i className={`fa-solid fa-heart`}></i>
                       </div>
                       <div className={styles.carText}>
                           <h3 className={styles.vendorCode}>Vendor Code :10521</h3>
                           <h3 className={styles.productName}>Big blue lego jeep<br/>Collection {`<<Brutal>>`} </h3>
                            <p className={styles.price}>Price</p>
                            <h3 className={styles.dollar}>400 $<span className={styles.strike}>600$</span></h3>
                       </div>
                       <div className={styles.addToCart}>
                           <i className="fa-solid fa-cart-shopping"></i>
                       </div>
                   </div>
               </div>
               <div className="col-lg-4">
                      <div className={`card ${styles.carItem}`}>
                       <div className={`${styles.image} p-5`}>
                           <img src={card5} alt="card" />
                       </div>
                       <div className={`${styles.like}`}>
                           <i className={`fa-solid fa-heart`}></i>
                       </div>
                       <div className={styles.carText}>
                           <h3 className={styles.vendorCode}>Vendor Code :10521</h3>
                           <h3 className={styles.productName}>Big blue lego jeep<br/>Collection {`<<Brutal>>`} </h3>
                            <p className={styles.price}>Price</p>
                            <h3 className={styles.dollar}>400 $<span className={styles.strike}>600$</span></h3>
                       </div>
                       <div className={styles.addToCart}>
                           <i className="fa-solid fa-cart-shopping"></i>
                       </div>
                   </div>
               </div>
               <div className="col-lg-4">
                      <div className={`card ${styles.carItem}`}>
                       <div className={`${styles.image} p-5`}>
                           <img src={card6} alt="card" />
                       </div>
                       <div className={`${styles.like}`}>
                           <i className={`fa-solid fa-heart`}></i>
                       </div>
                       <div className={styles.carText}>
                           <h3 className={styles.vendorCode}>Vendor Code :10521</h3>
                           <h3 className={styles.productName}>Big blue lego jeep<br/>Collection {`<<Brutal>>`} </h3>
                            <p className={styles.price}>Price</p>
                            <h3 className={styles.dollar}>400 $<span className={styles.strike}>600$</span></h3>
                       </div>
                       <div className={styles.addToCart}>
                           <i className="fa-solid fa-cart-shopping"></i>
                       </div>
                   </div>
               </div>

           </div>
          
        </div>
         <Pagination/>
        </>
    )
}