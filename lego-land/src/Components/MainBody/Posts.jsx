import React,{useEffect} from "react";

const Posts=({posts,loading,search})=>{
   useEffect(
        ()=>{
            console.log(search)
        },[search]
    )
    if(loading){
        return <h2>Loading...</h2>
    }
  
    
     
    return (
        <>

        {   search?
            posts.filter(e=> console.log(Object.values(e.toString()))):
            posts
        }
        </>
    )
    
}
export default Posts;