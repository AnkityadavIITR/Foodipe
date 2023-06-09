import { Splide,SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import styles from "../styles.module.css"
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

export const Veggies = () => {
  const [Veggies,setVeggies]=useState([]);
  const[error,setError]=useState(null)
  useEffect(()=>{
    const check=localStorage.getItem('veggies');
    if(check){
      setVeggies(JSON.parse(check));
    }else{


      fetch( `https://api.spoonacular.com/recipes/random?apiKey=${process.env.Api_key}&number=9`)
      .then(response => response.json())
      .then(data => 
        setVeggies(data.recipes))
        .catch(error => setError(error));
      }
    },[setVeggies]);
    
    if (error) {
      throw error;
    }
  
  return (
    <div >
             <h3>Popular Veggies</h3>
             <Splide options={{
              perPage:3,
              arrows:false,
              drag:"free",
              gap:'2rem'

             }}>
             {
              Veggies.map((recipe)=>{
                return(
                  <SplideSlide key={recipe.id}>
                    <Link to={"/recipe/" +recipe.id}>
                   <div className={styles.card}>
                      <p className={styles.para}>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} className={styles.image}></img>
                  </div>
                  </Link>
                  </SplideSlide>
                );
              })
            }
            </Splide>
          </div>
  )
}
