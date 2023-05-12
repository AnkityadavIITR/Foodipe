import { useEffect, useState } from "react"
import styles from "../styles.module.css"
import {SplideSlide, Splide} from  "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";


export const Popular=()=> {
  const [popular,setPopular]=useState([]);
  const [error, setError] = useState(null);
  
  useEffect(()=>{
    const check=localStorage.getItem('popular');
    if(check){
      setPopular(JSON.parse(check));
    }else{
      fetch( `https://api.spoonacular.com/recipes/random?apiKey=24b29fd7f5d94f058956eb26253fc25a&number=9&tags=vegetarian`)
      .then(response => response.json())
      .then(data => 
        setPopular(data.recipes))
        .catch(error => setError(error));
        
      }
    },[setPopular]);
    
    if (error) {
      throw error;
    }
  
  return (
    <div  className={styles.wrapper}>
      <h3>Popular picks</h3>
        <Splide options={{
          perPage:4,
          
          drag:"free",
          gap:'3rem',
          pagination:false

        }}>
        {
          popular.map((recipe)=>{
          return(
            <SplideSlide key={recipe.id}>
              <Link to={"/recipe/"+recipe.id}>
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


