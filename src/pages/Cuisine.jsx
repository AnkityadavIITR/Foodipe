import React, { useEffect, useState } from 'react'
import styles from "../styles.module.css"
// import motion from "framer-motion"
import { Link,useParams } from 'react-router-dom'
import styled from 'styled-components'
const Cuisine = () => {

  const [cuisine,setCuisin]=useState([]);
  const [error, setError] = useState(null);


  let param=useParams();
  
  let name=param.type;
  console.log('type',name);

  useEffect(()=>{
    // const check=localStorage.getItem('cuisine');
    // if(check){
    //   setCuisine(JSON.parse(check));
    // }else{
      console.log('name',name)
      fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.React_Api}&number=9&cuisine=${name}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log('data:', data);

        if(data){
            console.log('success');
            // console.log( 'value',data.results);
            setCuisin(data.results);
            
        }else console.log('fail');

      })

        .catch(error => setError(error));
      }
    ,[param.type]);

  if (error) {
    throw error;
  }

  return (
    <div className={styles.grid}>
      {
        cuisine && cuisine.length > 0 ? cuisine.map(recipe=>{
          return(
            <div className={styles.card}>
              <img src={recipe.image} alt={recipe.title} className={styles.image}></img>            
              <h4 className={styles.para}>{recipe.title}</h4>
            </div >
          )
        })
      :<p>No recipes found.</p>
}

 </div>
  )
}

  const Card1=styled.div`
    min-height: 15rem;
    overflow: hidden;
    position: relative;
    z-index: 2;
    background: linear-gradient(rgba(0,0,0,0,),rgba(0,0,0,0.5));
    img{
      width:100%;
      height:100%;
      object-fit:cover,
      border-radius:2rem;
      
    } 
    a{
      text-decoration :none;
    }
    .p{
      text-align:center
    }

  `


export default Cuisine
