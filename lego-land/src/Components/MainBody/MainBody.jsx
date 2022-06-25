//Typescript-type define
//pagination-router-dom
//component-destructure
//data-api-page json file
//react context
import React, { useEffect, useState } from "react";
import styles from "./MainBody.module.css"
import Content from "./Content"
import card1 from "../../images/cardIem1.jpg"
import card2 from "../../images/cardIem2.jpg"
import card3 from "../../images/cardIem3.jpg"
import card4 from "../../images/cardIem4.jpg"
import card5 from "../../images/cardIem5.jpg"
import card6 from "../../images/cardIem6.jpg"
import Posts from "./Posts";
import Pagination from "../Pagination/Pagination"
import {Data} from "../Main/Data.jsx"
export default function MainBody(props){
    const {price,theme,age,tagvisible}=props
const [data,setData]=useState(Data)
 const [search,setSearch]=useState("")
   //loop 
    const currentPost=[<Content data={data}  image={[card1,card1,card1]}/>,<Content  data={data} image={[card2,card2,card2]}   />,<Content  data={data} image={[card3,card3,card3]}  />,<Content  data={data} image={[card4,card4,card4]}/>,<Content  data={data} image={[card5,card5,card5]}/>,<Content  data={data} image={[card6,card6,card6]}/>,<Content  data={data} image={[card1,card6,card6]}/>,<Content  data={data} image={[card1,card1,card6]}/>,<Content  data={data} image={[card1,card1,card1]}/>,<Content  data={data} image={[card2,card1,card1]}/>,<Content  data={data} image={[card2,card2,card1]}/>,<Content  data={data} image={[card2,card2,card2]}/> ]
    //current post
    const [posts,setPosts]=useState([]);
    const [Loading,setLoading]=useState(false)
    //react router dom -next 
    const [currentPage,setCurrentPage]=useState(1)
    
    const [indexOfLastPost,setIndexOfLastPost]=useState()
    const [indexOfFirstPost,setIndexOfFirstPost]=useState()
    //product name
    const [postsPerPage]=useState(2)
    //pagination-loop
    const [currentContent,setcurrentContent]=useState(currentPost.slice(0,2))
    //component
    const [tags,setTags]=useState()
    const [display,setDisplay]=useState(true) //tag not working properly.
    
   const [isSearch,setisSearch]=useState(false)
   const [newArray,setnewArr]=useState([])
   //context-react-load data-destructure component
    const [start,setStart]=useState(1)
  
    useEffect(
        ()=>{
            
            setLoading(true)
            setPosts(currentPost)
            setLoading(false)
            
         
        }
    ,[]);
           
    useEffect(
        ()=>{
        if(isSearch && tags){
            const price=tags.price
            
             const newData= Data.filter(e=> price[0]< e.presentPrice &&  e.presentPrice<=price[1])
               const Array=[]
               
               for(let i=1;i<=newData.length;i++){
            Array.push(<Content data={newData}  image={[card1,card1,card1]}/>)
        }
          
       
          setnewArr(Array)
        }
        if(isSearch && search!=""){
     const regex=new RegExp(search, 'g')
          
          const newData= Data.filter(e=>{
              
              if(regex.test(e["Vendor Code"])){
                    return(
                  true
              )
              }else if(regex.test(e.presentPrice.toString())){
                  return true
              }else if(regex.test(e.title)){
                  return true
              }
            
          }
          )
          
           
          const Array=[]
         
               for(let i=1;i<=newData.length;i++){
            Array.push(<Content data={newData}  image={[card1,card1,card1]}/>)
        }
          
       
          setnewArr(Array)
        }
   
        } 
       
    ,[isSearch]);
           
    useEffect(
        ()=>{
          if(newArray.length>0){
           setcurrentContent(newArray.slice(0,2))
           
           setnewArr([])
           
          }
        } 
       
    ,[newArray]);
    useEffect(
        ()=>{

         setisSearch(false)
         console.log(isSearch)
        } 
       
    ,[currentContent]);
           
           
    useEffect(
        ()=>{
            if(tagvisible){
               setTags({price:price?price:[],theme:theme?theme:{},age:age?age:{}})
              props.applyFilter()
              setisSearch(true)
              setDisplay(true)
            }
            
        }
    ,[tagvisible]);

    
       useEffect(
        ()=>{
           setIndexOfLastPost(currentPage+1)
         let start=1
           if(currentPage<=Math.ceil(posts.length/posts)){
            start=1
           }else if(currentPage>Math.ceil(posts.length/2)){
               start=Math.ceil(posts.length/2)+1
               
           }
         
           if(currentPage!=posts.length&&currentPage>0){
               
            setStart(start)
           }
        }
    ,[currentPage]);
       useEffect(
        ()=>{
           
           
           setIndexOfFirstPost(currentPage-1)
        }
    ,[indexOfLastPost]);
       useEffect(
        ()=>{
             setLoading(true)
           setcurrentContent(posts.slice(indexOfFirstPost,indexOfLastPost))
           setLoading(false)
        }
    ,[indexOfLastPost,indexOfFirstPost]);
    const paginate=(event,pageNumber)=>{
        event.preventDefault()  
        setCurrentPage(pageNumber)    
        }
    const Next=(event)=>{
        event.preventDefault()
        setCurrentPage((prevState)=>(prevState+1))
        
    }
    const Prev=(event)=>{
        event.preventDefault()
        setCurrentPage((prevState)=>(prevState-1))
    }
    const displays=()=>{
        setDisplay(false)
        
        
    }
   
   
    const setSear=(e)=>{
                    setSearch(e.target.value)
    }
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
                   
                   <input type="text" placeholder="Search among 100+ products" name="search" onChange={setSear} onKeyPress={(e) => e.key === 'Enter' ? setisSearch(true):null} />
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
           <div className={styles.tag} >
               {   tags?( 
                  <>
                     <div className={styles.tagItem} style={{opacity:display?"1":"0"}} >
                   <h3>
                      {`Price : From ${tags.price[0]} to ${tags.price[1]}`}
                   </h3>
                   <i className="fa-solid fa-xmark" onClick={displays}></i>
               </div>  
                     {Object.keys(tags.theme).map(function(keyName, keyIndex) {
                      if(tags.theme[keyName]===true){return  (
    		        <div className={styles.tagItem} style={{opacity:display?"1":"0"}} >
                   <h3>
                       {keyName}
                   </h3>
                   <i className="fa-solid fa-xmark"  onClick={displays}></i>
               </div>
            )}
    		

		})}
                     {Object.keys(tags.age).map(function(keyName, keyIndex) {
                      if(tags.age[keyName]===true){return  (
    		        <div className={styles.tagItem} >
                   <h3>
                       {keyName}
                   </h3>
                   <i className="fa-solid fa-xmark"></i>
               </div>
            )}
    		

		})}
                   
                  </>
               
                  ):null
                 
               
                  
               }
               
            
           </div>
       
         <Posts posts={currentContent} loading={Loading} />
           </div>
         <Pagination posts={postsPerPage} totalPosts={posts.length} paginate={paginate} next={Next} prev={Prev} Start={start} currentPage={currentPage}/>
        </>
    )
}