import React from "react";
import styles from "./SideBar.module.css"
export default function SideBar(){
    return(
        <>
        <div className={styles.sideMenu}>
            <div className={styles.listItems}>
               <ul>
                   <li>
                       <div className={styles.price}>
                            <p>Price</p>
                           
                       </div>
                       <div className={styles.priceRange}>
                           <input type="range" name="" id="" />
                       </div>
                   </li>
                   <li>
                       <div className={styles.Theme}>
                           <p>Theme</p>
                           <i class="fa-solid fa-angle-up"></i>
                       </div>
                       <div className={styles.themeBody}>
                             <label htmlFor="space" className={styles.cont}>
                            <input type="checkbox" id="space" />
                            <span>Space (44)</span>
                           <span className={styles.checkmark}></span>
                           </label>
                             <label htmlFor="ninja" className={styles.cont}>
                            <input type="checkbox" id="ninja" />
                            <span>Ninja (44)</span>
                           <span className={styles.checkmark}></span>
                           </label>
                             <label htmlFor="transport" className={styles.cont}>
                            <input type="checkbox" id="transport" />
                            <span>Transport (44)</span>
                           <span className={styles.checkmark}></span>
                           </label>
                             <label htmlFor="building" className={styles.cont}>
                            <input type="checkbox" id="building" />
                            <span>Building (44)</span>
                           <span className={styles.checkmark}></span>
                           </label>
                             <label htmlFor="homes" className={styles.cont}>
                            <input type="checkbox" id="homes" />
                            <span>Homes (44)</span>
                           <span className={styles.checkmark}></span>
                           </label>
                       </div>
                   </li>
                   <li >
                       <div className={styles.age}>
                           <p>Age</p>
                           <i class="fa-solid fa-angle-up"></i>
                       </div>
                       <div className={styles.checkAge}>
                            <label htmlFor="year" className={styles.cont}>
                            <input type="checkbox" id="year" />
                            <span>Up to a year</span>
                           <span className={styles.checkmark}></span>
                            </label>
                            <label htmlFor="year1" className={styles.cont}>
                            <input type="checkbox" id="year1" />
                            <span>1 year-2 years</span>
                           <span className={styles.checkmark}></span>
                            </label>
                            <label htmlFor="year2" className={styles.cont}>
                            <input type="checkbox" id="year2" />
                            <span>3 years-5 years</span>
                           <span className={styles.checkmark}></span>
                            </label>
                            <label htmlFor="year3" className={styles.cont}>
                            <input type="checkbox" id="year3" />
                            <span>6 years-5 years</span>
                           <span className={styles.checkmark}></span>
                            </label>
                            <label htmlFor="year4" className={styles.cont}>
                            <input type="checkbox" id="year4" />
                            <span>Older than 12 years</span>
                           <span className={styles.checkmark}></span>
                            </label>
                       </div>
                   </li>
                   <li >
                       <select className={styles.dropDown}>
                           <option value="Stockavai">Brand</option>
                       </select>
                   </li>
                   <li >
                       <select className={styles.dropDown}>
                           <option value="Stockavai">Characters</option>
                       </select>
                   </li>
                   <li className={styles.noBorder}>
                       <select className={styles.dropDown}>
                           <option value="Stockavai">Stock Availability</option>
                       </select>
                   </li>
                   <li >
                       <div className={styles.applyFilter}>
                           <button>Apply Filter</button>
                           <i class="fa-solid fa-trash-can"></i>
                       </div>
                   
                   </li>
               </ul>
            </div>
        </div>
        </>
    )
}