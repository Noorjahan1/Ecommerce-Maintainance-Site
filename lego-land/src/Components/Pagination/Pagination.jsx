import React from "react";
import styles from "./Pagination.module.css"
export default function Pagination({posts,totalPosts,paginate,next,prev}){
    let pageNumbers=[];
     
    for(let i=1;i<=Math.ceil(totalPosts/posts);i++){
        pageNumbers.push(i);
       
    }
    return(
        <>
        <div className={styles.pagination}>
            <div className={styles.prev}>
                <a href="#" onClick={(event)=>prev(event)}>Previous</a>
            </div>
            
            {pageNumbers.map((n,i)=>{
               
              return( <div className={styles.number} key={n}>
                <a href="#" onClick={(event)=>paginate(event,n)}>{n}</a>
               </div>
               )}
               
               )}
            
           
            <div className={styles.next}>
                <a href="#" onClick={(event)=>next(event)}>Next</a>
            </div>

        </div>
        </>
    )
}