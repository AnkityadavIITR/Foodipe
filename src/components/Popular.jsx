import { useEffect, useState } from "react"
import styles from "../styles.module.css"
import {SplideSlide, Splide} from  "@splidejs/react-splide"
import '@splidejs/react-splide/css';


export const Popular=()=> {
  const [popular,setPopular]=useState([]);
  const [error, setError] = useState(null);
  
  useEffect(()=>{
    const check=localStorage.getItem('popular');
    if(check){
      setPopular(JSON.parse(check));
    }else{
      fetch( `https://api.spoonacular.com/recipes/random?apiKey=5c2f5836eea14c819a83faf11a0df1fe&number=9&tags=vegetarian`)
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
              <div className={styles.card}>
                <p className={styles.para}>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} className={styles.image}></img>
              </div>
            </SplideSlide>
          );
          })
        }
        </Splide>
    </div>
        )

}


