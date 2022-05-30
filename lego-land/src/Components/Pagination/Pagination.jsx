import React from "react";
import styles from "./Pagination.module.css"
export default function Pagination(){
    return(
        <>
        <div className={styles.pagination}>
            <div className={styles.prev}>
                <p>Previous</p>
            </div>
            <div className={styles.number}>
                <p>01</p>
            </div>
            <div className={styles.number}>
                <p>02</p>
            </div>
            <div className={styles.number}>
                <p>03</p>
            </div>
            <div className={styles.number}>
                <p>04</p>
            </div>
            <div className={styles.number}>
                <p>...</p>
            </div>
             <div className={styles.number}>
                <p>45</p>
            </div>
            <div className={styles.next}>
                <p>Next</p>
            </div>

        </div>
        </>
    )
}