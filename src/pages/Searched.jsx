import React from 'react'
import { useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from "../styles.module.css"

const Searched = () => {

    const [search,setSearch]=useState([]);
    const [error, setError] = useState(null);

    let param=useParams();
    let name=param.search;

    //here its 'search' because that what we put in routes

    useEffect(()=>{
        // const check=localStorage.getItem('cuisine');
        // if(check){
        //   setCuisine(JSON.parse(check));
        // }else{
          console.log('name',name)
          fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=5c2f5836eea14c819a83faf11a0df1fe&number=9&query=${name}`)
          .then(res => {
            return res.json()
          })
          .then(data => {
            console.log('data:', data);
    
            if(data){
                console.log('success');
                setSearch(data.results);
                
            }else console.log('fail');
    
          })
    
            .catch(error => setError(error));
          }
        ,[param.search]);
    
      if (error) {
        throw error;
      }
  return (
    <div className={styles.grid}>
      {
        search && search.length > 0 ? search.map(recipe=>{
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

export default Searched
